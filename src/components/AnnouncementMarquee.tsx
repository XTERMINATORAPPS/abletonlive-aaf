const Bullet = () => (
  <svg viewBox="0 0 8 8" fill="currentColor" className="w-2 h-2 mx-4 inline-block flex-shrink-0 text-primary">
    <circle cx="4" cy="4" r="4" />
  </svg>
);

const marqueeText = "Abletonlive.aaf v2 is out";
const repeatCount = 30;

const MarqueeHalf = () => (
  <div className="inline-flex items-center flex-shrink-0">
    {Array.from({ length: repeatCount }, (_, i) => (
      <span key={i} className="inline-flex items-center flex-shrink-0">
        <span className="flex-shrink-0">{marqueeText}</span>
        <Bullet />
      </span>
    ))}
  </div>
);

const AnnouncementMarquee = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-xl border-t border-white/5"
    >
      <div className="py-3 overflow-hidden select-none">
        <div className="marquee-track flex whitespace-nowrap items-center text-sm font-bold uppercase tracking-widest text-white">
          <MarqueeHalf />
          <MarqueeHalf />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementMarquee;
