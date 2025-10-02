"use client";

import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/use-local-storage";
import { MoonStar } from "lucide-react";

const WelcomeOverlay = () => {
  const [hasVisited, setHasVisited] = useLocalStorage("hasVisitedSonoZen", false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    // Only run this logic on the client
    if (typeof window !== "undefined") {
      if (!hasVisited) {
        setShowOverlay(true);
        // Fade in
        setTimeout(() => setAnimationClass("opacity-100"), 100);
        // Fade out
        setTimeout(() => setAnimationClass("opacity-0"), 2500);
        // Hide and set visited flag
        setTimeout(() => {
          setShowOverlay(false);
          setHasVisited(true);
        }, 3000);
      }
    }
  }, [hasVisited, setHasVisited]);

  if (!showOverlay) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${animationClass}`}
    >
      <MoonStar className="h-16 w-16 text-primary animate-pulse" />
      <h2 className="mt-6 text-3xl font-headline text-foreground">
        Bem-vindo(a) ao Sono em Prática
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Agradecemos sua confiança em nossa jornada.
      </p>
    </div>
  );
};

export default WelcomeOverlay;
