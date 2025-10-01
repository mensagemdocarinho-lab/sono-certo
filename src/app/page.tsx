"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SleepPortalTabs from "@/components/sleep-portal-tabs";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const scrollToContent = () => {
  const contentElement = document.getElementById("content");
  if (contentElement) {
    contentElement.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative text-center py-20 sm:py-32 lg:py-40 flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="container z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-primary-foreground tracking-tight">
              Sua jornada para noites perfeitas começa agora.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
              Cansado de contar carneirinhos? Explore nossos guias interativos e encontre a solução ideal para você.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" onClick={scrollToContent}>
                Explore os Guias
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <div id="content" className="container mx-auto px-4 py-12 sm:py-16">
          <SleepPortalTabs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
