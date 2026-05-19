# Progress

## 2026-05-19
- Pulled latest changes from origin/main (702a2ca..2679ba3). Fast-forward merge, 3 files updated: help/index.html, gui.png, HeroSection.tsx.
- Added `justify-center` to Windows, macOS, and Gumroad download cards in HeroSection.tsx to vertically center content without changing card height.
- Replaced show more/less button on release notes with a scrollable container (max 4 lines). Removed unused `showAllReleaseNotes` state.
- Centered the product GUI image within its column by adding flex centering to the wrapper div.
- Created AnnouncementMarquee component with infinite scrolling "Abletonlive.aaf Version 2 is out" bar. Added marquee CSS animation. Fixed to bottom of viewport.
- Ported Apple iOS 26 liquid glass effect (from nikdelvin/liquid-glass) to React: created utils/liquidGlass.ts (SVG displacement filter) and LiquidGlass.tsx wrapper component. Applied to Navbar (on scroll) and AnnouncementMarquee.
- Added 3 new v2.0.0 blog posts: main release announcement, MXF-to-WAV/Resolve stereo deep dive, and BPM/time signature guide.
- SEO optimizations from GSC data: rewrote Media Composer markers post title/meta to match "include markers" search intent (2,088 impressions, 0 clicks), updated AAF vs OMF title for 2026 (pos 10, 545 impr), refreshed best-aaf-converter to 2026 (pos 31), improved does-ableton-export-aaf meta (100+ impr).
