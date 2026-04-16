// Post-build script: generates static HTML files for each blog route
// so GitHub Pages serves them with a 200 status code instead of 404.
// Each file includes proper meta tags for SEO and loads the SPA.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

// Blog post data (must match src/data/blogPosts.ts slugs)
const blogPosts = [
  {
    slug: "aaf-to-ableton-live-complete-guide",
    title: "AAF to Ableton Live: The Complete Guide for Audio Professionals",
    description: "Learn how to convert AAF files from Pro Tools, DaVinci Resolve, and other DAWs to Ableton Live projects with sample-accurate precision.",
  },
  {
    slug: "pro-tools-to-ableton-live-transfer",
    title: "Pro Tools to Ableton Live: How to Transfer Your Session",
    description: "Step-by-step guide to transferring Pro Tools sessions to Ableton Live using AAF export and conversion. Preserve clips, fades, and automation.",
  },
  {
    slug: "davinci-resolve-audio-to-ableton",
    title: "DaVinci Resolve to Ableton Live: Audio Post-Production Workflow",
    description: "Export audio from DaVinci Resolve to Ableton Live for advanced sound design and mixing. Complete AAF workflow guide.",
  },
  {
    slug: "what-is-aaf-format",
    title: "What Is AAF? Understanding the Advanced Authoring Format",
    description: "AAF (Advanced Authoring Format) explained for audio and video professionals. Learn what AAF files contain and how they enable cross-DAW workflows.",
  },
  {
    slug: "aaf-vs-omf-comparison",
    title: "AAF vs OMF: Which Format Should You Use for Project Transfer?",
    description: "Compare AAF and OMF file formats for audio project exchange. Learn the differences in automation, file size, and DAW compatibility.",
  },
  {
    slug: "logic-pro-to-ableton-live-workflow",
    title: "Logic Pro to Ableton Live: Transfer Your Projects via AAF",
    description: "Move Logic Pro projects to Ableton Live using AAF export. Covers what transfers, what does not, and workarounds for common issues.",
  },
  {
    slug: "premiere-pro-audio-to-ableton",
    title: "Adobe Premiere Pro to Ableton Live: Audio Transfer Guide",
    description: "Export audio from Premiere Pro to Ableton Live using AAF. Step-by-step guide for video editors who need professional audio post-production.",
  },
  {
    slug: "ableton-live-post-production-tips",
    title: "Using Ableton Live for Post-Production: Tips and Techniques",
    description: "Why Ableton Live is a powerful tool for audio post-production. Tips for sound design, foley, dialogue editing, and mixing in Ableton.",
  },
  {
    slug: "how-to-export-aaf-from-any-daw",
    title: "How to Export AAF From Any DAW or NLE (2025 Guide)",
    description: "Step-by-step AAF export instructions for Pro Tools, DaVinci Resolve, Premiere Pro, Logic Pro, Nuendo, Cubase, and MAGIX Vegas.",
  },
  {
    slug: "top-audio-post-production-tools-2025",
    title: "Top Audio Post-Production Tools Every Sound Designer Needs (2025)",
    description: "Essential software tools for audio post-production in 2025. Covers DAWs, editors, restoration tools, and format converters.",
  },
  {
    slug: "does-ableton-live-export-aaf-or-omf",
    title: "Does Ableton Live Export AAF or OMF? What You Need to Know",
    description: "Does Ableton Live support AAF or OMF export? No -- but here are the workarounds for transferring Ableton projects to Pro Tools, DaVinci Resolve, and other DAWs.",
  },
  {
    slug: "how-to-import-aaf-into-ableton-live",
    title: "How to Import AAF Files Into Ableton Live (2025 Guide)",
    description: "Import AAF files into Ableton Live using Abletonlive.aaf converter. Step-by-step guide for bringing Pro Tools, Resolve, and Premiere Pro projects into Ableton.",
  },
  {
    slug: "best-aaf-converter-tools",
    title: "Best AAF Converter Tools for Audio Professionals (2025)",
    description: "Compare the best AAF converter tools for 2025. Convert AAF files to Ableton Live, Pro Tools, and other DAW formats with audio, fades, and automation preserved.",
  },
  {
    slug: "ableton-live-aaf-omf-pro-tools-guide",
    title: "Ableton Live and Pro Tools: AAF/OMF Transfer Guide",
    description: "Transfer audio between Ableton Live and Pro Tools using AAF/OMF. Covers Pro Tools to Ableton conversion and Ableton to Pro Tools stem export workflows.",
  },
  {
    slug: "export-markers-media-composer-aaf",
    title: "How to Export Markers from Media Composer and Pro Tools via AAF",
    description: "Export markers from Avid Media Composer and Pro Tools to AAF. Learn which markers transfer, which do not, and workarounds for marker preservation.",
  },
];

// Generate /blog/index.html
const blogListDir = path.join(distDir, "blog");
fs.mkdirSync(blogListDir, { recursive: true });

const blogListHtml = indexHtml
  .replace(
    /<title>.*?<\/title>/,
    "<title>Blog - AAF to Ableton Live Guides | Abletonlive.aaf</title>"
  )
  .replace(
    /<meta name="description"[\s\S]*?\/>/,
    '<meta name="description" content="Guides, tutorials, and tips for converting AAF files to Ableton Live. Learn workflows for Pro Tools, DaVinci Resolve, Premiere Pro, and more." />'
  )
  .replace(
    /<link rel="canonical".*?\/>/,
    '<link rel="canonical" href="https://abletonliveaaf.shop/blog" />'
  );

fs.writeFileSync(path.join(blogListDir, "index.html"), blogListHtml);
console.log("Generated: /blog/index.html");

// Generate /blog/{slug}/index.html for each post
for (const post of blogPosts) {
  const postDir = path.join(blogListDir, post.slug);
  fs.mkdirSync(postDir, { recursive: true });

  const postHtml = indexHtml
    .replace(
      /<title>.*?<\/title>/,
      `<title>${post.title} | Abletonlive.aaf Blog</title>`
    )
    .replace(
      /<meta name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${post.description}" />`
    )
    .replace(
      /<link rel="canonical".*?\/>/,
      `<link rel="canonical" href="https://abletonliveaaf.shop/blog/${post.slug}" />`
    )
    .replace(
      /<meta property="og:title".*?\/>/,
      `<meta property="og:title" content="${post.title}" />`
    )
    .replace(
      /<meta property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${post.description}" />`
    )
    .replace(
      /<meta property="og:url".*?\/>/,
      `<meta property="og:url" content="https://abletonliveaaf.shop/blog/${post.slug}" />`
    )
    .replace(
      /<meta name="twitter:title".*?\/>/,
      `<meta name="twitter:title" content="${post.title}" />`
    )
    .replace(
      /<meta name="twitter:description"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${post.description}" />`
    );

  fs.writeFileSync(path.join(postDir, "index.html"), postHtml);
  console.log(`Generated: /blog/${post.slug}/index.html`);
}

console.log(`\nDone! Generated ${blogPosts.length + 1} static HTML files.`);
