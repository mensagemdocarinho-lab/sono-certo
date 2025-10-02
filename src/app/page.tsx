"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SleepPortalTabs from "@/components/sleep-portal-tabs";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import BackToTopButton from "@/components/back-to-top-button";

const scrollToContent = (id: string) => {
  const contentElement = document.getElementById(id);
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
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 5 + 5}s`,
      };
      return <div key={i} className="star" style={style} />;
    });
    setStars(newStars);
  }, []);
  return <div className="star-field" aria-hidden="true">{stars}</div>;
};

const ZzzIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.288 1.096a1.002 1.002 0 0 0-.91 1.346l1.205 3.52H6.9a1 1 0 1 0 0 2h7.32l-2.43 7.104H4.9a1 1 0 1 0 0 2h7.824a1.002 1.002 0 0 0 .91-1.346l-1.205-3.52h5.681a1 1 0 1 0 0-2h-7.32l2.43-7.104h4.89a1 1 0 1 0 0-2H12.288z" />
    </svg>
);


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative text-center py-24 sm:py-32 lg:py-40 flex flex-col items-center justify-center bg-gradient-to-b from-background via-card to-background overflow-hidden">
          <StarField />
          <div className={`container z-10 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
             <ZzzIcon className="w-16 h-16 mx-auto text-primary mb-4 animate-fade-in-down" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-primary-foreground tracking-tight animate-fade-in-up">
              Bem‑vindo(a) ao Portal Sono em Prática
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/70 animate-fade-in-up animation-delay-300">
              Conteúdos práticos para reduzir a insônia e dormir melhor.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-600">
              <Button size="lg" onClick={() => scrollToContent('produtos')} aria-label="Rolar para a seção de produtos">
                Começar agora
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToContent('sos')} aria-label="Rolar para a seção SOS Madrugada">
                SOS Madrugada
              </Button>
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
