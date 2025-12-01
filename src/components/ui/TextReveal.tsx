import { useEffect, useState } from "react";

export default function TextReveal() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Outklass";

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;
    
    const typeCharacter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeCharacter, 150);
      } else {
        // Pause before restarting
        timeoutId = setTimeout(() => {
          currentIndex = 0;
          setDisplayedText("");
          typeCharacter();
        }, 2000);
      }
    };

    typeCharacter();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span className="inline-block text-[#ff5f45]">
      {displayedText}
    </span>
  );
}
