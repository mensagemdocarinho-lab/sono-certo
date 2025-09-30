"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Download, MoonStar } from "lucide-react";
import { handleDownloadAll } from "@/lib/zip-utils";

const Header = () => {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-headline font-bold text-primary flex items-center gap-2 justify-center sm:justify-start">
              <MoonStar className="text-primary" />
              Portal Sono em Prática
            </h1>
            <p className="text-muted-foreground mt-1">
              Materiais rápidos para aliviar a insônia.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleDownloadAll}>
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
