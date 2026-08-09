# Progress

## 2026-08-09

### V2.1 SEO and Meta Updates
- Updated all meta descriptions, OG/Twitter tags for two-way V2.1 messaging
- Added "ALS to AAF", "AAF to ALS", "two-way converter" to keywords
- Updated all Schema.org descriptions (SoftwareApplication, WebSite, HowTo)
- Removed VideoObject schema (Google marked as supplementary, not indexable)
- Removed second video embed from DemoSection.tsx

### 10 New Blog Posts (SEO Content Strategy)
- convert-omf-to-aaf-guide: Targets "convert omf to aaf" (67 impressions)
- what-programs-open-aaf-files: Targets "what programs open aaf files" (27 imp)
- aaf-to-wav-extract-audio: Targets "aaf to wav" (17 imp)
- ableton-live-to-pro-tools-export: V2.1 killer feature (ALS to AAF for Pro Tools)
- cubase-nuendo-to-ableton-aaf: Untapped Steinberg audience
- logic-pro-to-ableton-live-transfer: Untapped Logic Pro audience
- aaf-post-production-audio-guide: Targets "audio post production software" (22 imp)
- aaf-file-format-structure-guide: Targets "aaf file format" deep technical
- film-scoring-ableton-live-aaf: Film composer audience
- omf-file-format-explained: Targets "omf file format" (9 imp, position 41)
- Generated static HTML pages for all 28 blog posts
- Updated sitemap.xml with all 10 new URLs

### V2.1 Storefront Refresh
- Replaced hero image (Calque 4.png -> gui.png)
- Updated hero badge, headline, subtext, trial footnote for two-way conversion
- Added 2 new reviews (Milda Ambrozaite, blender render) to testimonials
- HowItWorksSection: added Apple-style toggle for AAF-to-ALS / ALS-to-AAF directions
- DAWSection: changed arrow to bidirectional, updated subtitle
- DemoSection: added second YouTube embed placeholder for V2.1 showcase
- PricingSection + HeroSection modal: added "Two-way conversion (AAF + ALS)" feature
- FAQSection: updated DAW answer for export, added "Can I export from Ableton Live to AAF?" FAQ, updated preservation answer, removed "future updates" FAQ
- Schema.org FAQ in index.html updated to match

## 2026-07-31

### V2.1 Launch Website Update
- Removed PriceIncreaseModal (no longer needed)
- Added Nicholas Williams 5-star review to testimonials
- Converted testimonials grid to auto-rotating carousel (5s interval, arrows, dots)
- Fixed carousel card heights to 320px for consistency
- Updated all pricing/licensing references sitewide to "2 Lifetime Licenses (Studio + Home) for $59.99":
  - AnnouncementMarquee: new V2.1 message with green price highlight
  - HeroSection: Gumroad card, trial footnote, modal features, modal CTA
  - PricingSection: features list, CTA button
  - FAQSection: trial, subscription, and license questions
  - index.html: meta description, OG, Twitter, Schema.org description, FAQ schema
  - blogPosts.ts: pricing text and comparison table
- Pushed to GitHub (commit 5f69045)

## 2026-06-08

### Dev Environment Fix
- Reverted Vite from v8 to v5 (rolldown native bindings crash on Node 24)
- Switched from plugin-react-swc to plugin-react (SWC bindings broken on Node 24)
- Removed data-gumroad-overlay-checkout attributes (were breaking overlay, already handled by Gumroad script)
- Added Schema.org JSON-LD structured data to TestimonialsSection
- Pushed to GitHub (commit ed14589)
