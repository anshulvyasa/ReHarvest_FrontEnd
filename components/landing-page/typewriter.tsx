"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  speed?: number;
};

export default function TypewriterOnce({ className = "", speed = 100 }: Props) {
  const fullText = "Supply Chain";
  const [text, setText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let index = 0;

    const type = () => {
      setText(fullText.substring(0, index + 1));
      index++;

      if (index < fullText.length) {
        timeoutRef.current = setTimeout(type, speed);
      }
    };

    timeoutRef.current = setTimeout(type, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [speed, fullText]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="pr-1 inline-block min-w-[1ch] text-inherit">
        {text || "\u00A0"}
      </span>
      {/* caret */}
      {text !== fullText && (
        <span className="absolute bottom-0 -right-[2px] w-[15px] h-[2px] rounded-full bg-[#456B42] animate-blink" />
      )}
    </span>
  );
}
