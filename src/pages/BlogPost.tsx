import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  const related = slug ? getRelatedPosts(slug, 3) : [];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Abletonlive.aaf Blog`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", post.metaDescription);
      }

      // Set canonical URL for this blog post
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonical) {
        canonical.href = `https://abletonliveaaf.shop/blog/${post.slug}`;
      }

      // Inject Article structured data
      const existingSchema = document.getElementById("blog-post-schema");
      if (existingSchema) existingSchema.remove();

      const schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.id = "blog-post-schema";
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.metaDescription,
        "datePublished": post.date + "T00:00:00Z",
        "dateModified": post.date + "T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "XTERMINATORAPPS",
          "url": "https://abletonliveaaf.shop"
        },
        "publisher": {
          "@type": "Organization",
          "name": "XTERMINATORAPPS",
          "logo": {
            "@type": "ImageObject",
            "url": "https://abletonliveaaf.shop/apple-touch-icon-180x180.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://abletonliveaaf.shop/blog/${post.slug}`
        },
        "keywords": post.keywords.join(", ")
      });
      document.head.appendChild(schema);
    }
    window.scrollTo(0, 0);

    return () => {
      // Cleanup: restore canonical and remove schema on unmount
      const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonical) {
        canonical.href = "https://abletonliveaaf.shop";
      }
      const schema = document.getElementById("blog-post-schema");
      if (schema) schema.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar onBuyNowClick={() => {}} />
        <div className="container mx-auto px-4 pt-32 pb-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you are looking for does not exist.
          </p>
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Convert markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const html: string[] = [];
    let inList = false;
    let inOrderedList = false;
    let inTable = false;
    let tableRows: string[][] = [];
    let inChecklist = false;

    const processInline = (text: string): string => {
      // Bold
      text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      // Italic
      text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
      // Code
      text = text.replace(/`(.+?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm text-primary">$1</code>');
      // Links - internal
      text = text.replace(/\[([^\]]+)\]\(\/([^)]*)\)/g, '<a href="/$2" class="text-primary hover:underline">$1</a>');
      // Links - external
      text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');
      return text;
    };

    const flushTable = () => {
      if (tableRows.length < 2) return;
      let t = '<div class="overflow-x-auto my-6"><table class="w-full text-sm"><thead><tr>';
      tableRows[0].forEach((cell) => {
        t += `<th class="text-left p-3 border-b border-white/10 text-foreground font-semibold">${processInline(cell.trim())}</th>`;
      });
      t += "</tr></thead><tbody>";
      for (let i = 2; i < tableRows.length; i++) {
        t += '<tr class="border-b border-white/5 hover:bg-white/[0.02]">';
        tableRows[i].forEach((cell) => {
          t += `<td class="p-3 text-muted-foreground">${processInline(cell.trim())}</td>`;
        });
        t += "</tr>";
      }
      t += "</tbody></table></div>";
      html.push(t);
      tableRows = [];
      inTable = false;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Table rows
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        if (!inTable) inTable = true;
        const cells = trimmed.split("|").filter((c) => c.trim() !== "");
        // Skip separator rows
        if (cells.every((c) => /^[-:]+$/.test(c.trim()))) {
          tableRows.push(cells);
          continue;
        }
        tableRows.push(cells);
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Empty line
      if (trimmed === "") {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        if (inOrderedList) {
          html.push("</ol>");
          inOrderedList = false;
        }
        if (inChecklist) {
          html.push("</ul>");
          inChecklist = false;
        }
        continue;
      }

      // Headings
      if (trimmed.startsWith("### ")) {
        html.push(`<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">${processInline(trimmed.slice(4))}</h3>`);
        continue;
      }
      if (trimmed.startsWith("## ")) {
        html.push(`<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">${processInline(trimmed.slice(3))}</h2>`);
        continue;
      }

      // Checklist
      if (trimmed.startsWith("- [ ] ") || trimmed.startsWith("- [x] ")) {
        if (!inChecklist) {
          html.push('<ul class="space-y-2 my-4">');
          inChecklist = true;
        }
        const checked = trimmed.startsWith("- [x] ");
        const text = trimmed.slice(6);
        const icon = checked
          ? '<span class="text-primary mr-2">[x]</span>'
          : '<span class="text-muted-foreground mr-2">[ ]</span>';
        html.push(`<li class="flex items-center text-muted-foreground">${icon}${processInline(text)}</li>`);
        continue;
      }

      // Unordered list
      if (trimmed.startsWith("- ")) {
        if (!inList) {
          html.push('<ul class="space-y-2 my-4 ml-4">');
          inList = true;
        }
        html.push(`<li class="text-muted-foreground flex items-start gap-2"><span class="text-primary mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span><span>${processInline(trimmed.slice(2))}</span></li>`);
        continue;
      }

      // Ordered list
      const orderedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
      if (orderedMatch) {
        if (!inOrderedList) {
          html.push('<ol class="space-y-2 my-4 ml-4 list-decimal list-inside">');
          inOrderedList = true;
        }
        html.push(`<li class="text-muted-foreground">${processInline(orderedMatch[2])}</li>`);
        continue;
      }

      // Paragraph
      html.push(`<p class="text-muted-foreground leading-relaxed mb-4">${processInline(trimmed)}</p>`);
    }

    // Close open tags
    if (inList) html.push("</ul>");
    if (inOrderedList) html.push("</ol>");
    if (inChecklist) html.push("</ul>");
    if (inTable) flushTable();

    return html.join("\n");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar onBuyNowClick={() => {}} />

      {/* Article Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                to="/blog"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary truncate">{post.title}</span>
            </div>

            <span className="text-xs font-medium bg-primary/15 text-primary px-3 py-1 rounded-full">
              Guide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Related <span className="gradient-text">Articles</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="glass-card-hover p-5 flex flex-col group"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-1 line-clamp-2">
                    {r.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-primary">
                    Read more
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Try <span className="gradient-text">Abletonlive.aaf</span> Free
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Convert your first 5 AAF files to Ableton Live projects at no cost.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              Download Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="btn-outline inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
