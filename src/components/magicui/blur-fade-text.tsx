import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

// Pure CSS reveal (see blur-fade.tsx): runs at page load with no JavaScript,
// so text can never stay invisible when hydration is slow or fails.
const BlurFadeText = ({
  text,
  className,
  duration = 0.4,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const styleFor = (extraDelay: number) =>
    ({
      "--bf-delay": `${delay + extraDelay}s`,
      "--bf-duration": `${duration}s`,
      "--bf-y": `${yOffset}px`,
      "--bf-blur": "8px",
    } as CSSProperties);

  if (animateByCharacter) {
    const characters = Array.from(text);
    return (
      <div className="flex">
        {characters.map((char, i) => (
          <span
            key={i}
            className={cn("inline-block blur-fade", className)}
            style={{
              ...styleFor(i * characterDelay),
              width: char.trim() === "" ? "0.2em" : "auto",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      <span
        className={cn("inline-block blur-fade", className)}
        style={styleFor(0)}
      >
        {text}
      </span>
    </div>
  );
};

export default BlurFadeText;
