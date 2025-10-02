"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Download } from "lucide-react";
import { ZzzIcon } from "@/components/icons";

const Header = () => {

  const handleDownloadClick = async () => {
    const { handleDownloadAll } = await import("@/lib/zip-utils");
    handleDownloadAll();
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ZzzIcon className="text-primary h-6 w-6" />
            <span className="font-headline font-semibold text-foreground/80">Sono em Prática</span>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleDownloadClick} variant="ghost" className="text-foreground/80 hover:text-primary hover:bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Baixar Tudo
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
