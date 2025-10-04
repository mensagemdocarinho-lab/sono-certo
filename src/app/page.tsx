"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SleepPortalTabs from "@/components/sleep-portal-tabs";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import BackToTopButton from "@/components/back-to-top-button";
import RotatingQuotes from "@/components/rotating-quotes";
import { siteConfig } from "@/lib/content";

const scrollToContent = () => {
  const contentElement = document.getElementById("produtos");
  if (contentElement) {
    contentElement.scrollIntoView({ behavior: "smooth" });
  }
};

const StarField = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    // Math.random() is safe to use in useEffect as it only runs on the client.
    const newStars = Array.from({ length: 50 }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 1 + 1}px`,
        height: `${Math.random() * 1 + 1}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 5 + 5}s`,
      };
      return <div key={i} className="star" style={style} />;
    });
    setStars(newStars);
  }, []);
  return <div className="star-field" aria-hidden="true">{stars}</div>;
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg-0 text-text-1">
      <Header />
      <main className="flex-grow">
        <section className="relative text-center py-20 sm:py-28 lg:py-32 flex flex-col items-center justify-center overflow-hidden">
          <StarField />
          <div className={`container z-10 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-text-1">
              Recupere suas noites de sono
            </h1>
            <div className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-text-2 h-16 flex items-center justify-center">
              <RotatingQuotes quotes={siteConfig.rotatingQuotes} />
            </div>
          </div>
        </section>
        <div id="produtos" className="container mx-auto px-4 py-16 sm:py-24">
          <SleepPortalTabs />
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
