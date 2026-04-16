# Progress

## 2026-04-16
- Pulled latest changes from remote (`git pull`). Fast-forward from 7cc89b7 to ae2b7ba. Updated 3 files: index.html, HeroSection.tsx, PricingSection.tsx.
- Created blog infrastructure: `src/data/blogPosts.ts` (10 initial posts), `src/pages/Blog.tsx` (listing), `src/pages/BlogPost.tsx` (reader with custom markdown renderer).
- Updated routing: Added `/blog` and `/blog/:slug` routes in `App.tsx`.
- Updated navigation: Added "Blog" link to `Navbar.tsx` and `Footer.tsx`.
- Enabled `@tailwindcss/typography` plugin in `tailwind.config.ts`.
- Updated `public/sitemap.xml` with all blog URLs.
- Analyzed Google Search Console data (Queries.csv, Pages.csv, Countries.csv, Chart.csv).
- Added 5 new SEO-targeted blog posts based on Search Console zero-click queries:
  1. "Does Ableton Live Export AAF or OMF?" -- targets 102 impressions, 0 clicks across 4 query variants
  2. "How to Import AAF Into Ableton Live" -- targets "ableton aaf import" (16 imp) and "aaf file ableton" (26 imp)
  3. "Best AAF Converter Tools" -- targets "aaf converter" (15 imp, position 55)
  4. "Ableton Live and Pro Tools: AAF/OMF Transfer Guide" -- targets pro tools roundtrip queries (8 imp)
  5. "Export Markers from Media Composer via AAF" -- targets "export markers media composer aaf" (22 imp)
- Updated sitemap.xml with all 5 new blog URLs.
- Fixed Navbar.tsx: Logo now uses React Router Link to='/'. Anchor links (#features, etc.) scroll on homepage or navigate to /#section from blog pages. /blog uses navigate().
- Fixed Footer.tsx: Same routing-aware link handling as Navbar.
- Updated Index.tsx: Added useEffect to handle hash-based scrolling when arriving from another page (e.g. /blog -> /#features).
- Fixed Buy Now button on blog pages: now opens Gumroad overlay checkout everywhere.
- Integrated Gumroad overlay checkout: added gumroad.js script to index.html, replaced all Buy Now buttons/links with Gumroad overlay anchor tags (Navbar, PricingSection, HeroSection).
- SEO Fix 1: Replaced static 404.html with SPA redirect script so GitHub Pages serves blog routes correctly for Google indexing.
- SEO Fix 2: Added SPA redirect handler script in index.html head to restore correct React Router paths.
- SEO Fix 3: Fixed price in SoftwareApplication schema from "50" to "59.99" to match PricingSection.
- SEO Fix 4: Added HowTo structured data schema for "How to Convert AAF Files to Ableton Live" (3 steps).
- SEO Fix 5: BlogPost.tsx now injects Article structured data (JSON-LD) dynamically per post, sets canonical URL per post, and cleans up on unmount.
