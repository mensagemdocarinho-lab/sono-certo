"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={cn(
        "fixed bottom-4 right-4 rounded-full h-12 w-12 transition-opacity duration-300 z-50",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
};

export default BackToTopButton;
