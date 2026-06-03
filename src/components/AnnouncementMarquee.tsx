import { useRef, useEffect, useState } from "react";

const Bullet = () => (
  <svg viewBox="0 0 8 8" fill="currentColor" className="w-2 h-2 mx-6 inline-block flex-shrink-0 text-primary">
    <circle cx="4" cy="4" r="4" />
  </svg>
);

const marqueeContent = (
  <>
    Abletonlive.aaf V2.1 launches in July. Price will increase to{" "}
    <span style={{ color: '#ff4444', fontWeight: 800 }}>$98.99</span>
    {" "}. Get your lifetime license now for $59.99 before it goes up.
  </>
);

const AnnouncementMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(4);

  useEffect(() => {
    // Calculate how many copies we need to fill the screen
    if (trackRef.current) {
      const firstChild = trackRef.current.children[0] as HTMLElement;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth;
        const screenWidth = window.innerWidth;
        // We need at least 2x screen width to scroll seamlessly
        const needed = Math.ceil((screenWidth * 3) / itemWidth) + 1;
        setCopies(Math.max(needed, 4));
      }
    }
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-t border-white/5"
    >
      <div className="py-3 overflow-hidden select-none">
        <div
          ref={trackRef}
          className="marquee-track flex whitespace-nowrap items-center text-sm font-bold uppercase tracking-widest text-white"
        >
          {Array.from({ length: copies }, (_, i) => (
            <span key={i} className="inline-flex items-center flex-shrink-0">
              <span className="flex-shrink-0">{marqueeContent}</span>
              <Bullet />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementMarquee;
