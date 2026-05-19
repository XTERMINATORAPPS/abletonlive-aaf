import { useRef, useEffect, useCallback } from "react";
import { getDisplacementFilter } from "../utils/liquidGlass";

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  strength?: number;
  chromaticAberration?: number;
  blur?: number;
  brightness?: number;
  saturate?: number;
  overlayColor?: string;
}

const supportsBackdropFilterUrl = (() => {
  if (typeof document === "undefined") return false;
  const testEl = document.createElement("div");
  testEl.style.cssText = "backdrop-filter: url(#test)";
  return (
    testEl.style.backdropFilter === "url(#test)" ||
    testEl.style.backdropFilter === 'url("#test")'
  );
})();

const LiquidGlass = ({
  children,
  className = "",
  depth = 6,
  strength = 60,
  chromaticAberration = 1,
  blur = 0,
  brightness = 1.1,
  saturate = 1.5,
  overlayColor = "rgba(20, 20, 20, 0.45)",
}: LiquidGlassProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  const applyGlass = useCallback(() => {
    const container = containerRef.current;
    const glass = glassRef.current;
    if (!container || !glass) return;

    const rect = container.getBoundingClientRect();
    const width = Math.round(rect.width);
    const height = Math.round(rect.height);
    if (width === 0 || height === 0) return;

    const radius = parseFloat(getComputedStyle(container).borderRadius) || 0;

    glass.style.width = `${width}px`;
    glass.style.height = `${height}px`;

    if (supportsBackdropFilterUrl) {
      const filterUrl = getDisplacementFilter({
        height,
        width,
        radius,
        depth,
        strength,
        chromaticAberration,
      });
      glass.style.backdropFilter = `blur(${blur / 2}px) url('${filterUrl}') blur(${blur}px) brightness(${brightness}) saturate(${saturate})`;
    } else {
      // Safari fallback -- enhanced glassmorphism
      glass.style.backdropFilter = `blur(${Math.max(blur, width / 10)}px) saturate(180%)`;
    }
  }, [depth, strength, chromaticAberration, blur, brightness, saturate]);

  useEffect(() => {
    applyGlass();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => applyGlass());
    observer.observe(container);
    return () => observer.disconnect();
  }, [applyGlass]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Dark overlay for glass depth */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: overlayColor }}
      />
      {/* Content */}
      <div className="relative z-[3]">{children}</div>
      {/* Glass filter layer */}
      <div className="absolute inset-0 z-[2]">
        <div
          ref={glassRef}
          className={className}
        />
      </div>
    </div>
  );
};

export default LiquidGlass;
