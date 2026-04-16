// Post-build script: generates static HTML files for each blog route
// so GitHub Pages serves them with a 200 status code instead of 404.
// Reads slug/title/description directly from blogPosts.ts source file.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

// Parse blogPosts.ts to extract slug, title, and metaDescription
const blogPostsSource = fs.readFileSync(
  path.join(__dirname, "src", "data", "blogPosts.ts"),
  "utf-8"
);

// Extract all posts using regex on the source file
const postRegex = /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?metaDescription:\s*"([^"]+)"/g;
const blogPosts = [];
let match;
while ((match = postRegex.exec(blogPostsSource)) !== null) {
  blogPosts.push({
    slug: match[1],
    title: match[2],
    description: match[3],
  });
}

if (blogPosts.length === 0) {
  console.error("ERROR: No blog posts found in blogPosts.ts!");
  process.exit(1);
}

console.log(`Found ${blogPosts.length} blog posts in blogPosts.ts`);

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
