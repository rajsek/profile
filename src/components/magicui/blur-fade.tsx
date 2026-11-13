import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

// Pure CSS reveal. The animation starts at page load without any JavaScript,
// so content can never get stuck at opacity:0 waiting for hydration (the old
// framer-motion version SSR-rendered every section hidden and showed a white
// page whenever JS was slow or a chunk failed on first load).
const BlurFade = ({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  blur = "6px",
}: BlurFadeProps) => {
  const style = {
    "--bf-delay": `${0.04 + delay}s`,
    "--bf-duration": `${duration}s`,
    "--bf-y": `${yOffset}px`,
    "--bf-blur": blur,
  } as CSSProperties;
  return (
    <div className={cn("blur-fade", className)} style={style}>
      {children}
    </div>
  );
};

export default BlurFade;
