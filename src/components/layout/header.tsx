"use client";

import { ZzzIcon } from "@/components/icons";
import { siteConfig } from "@/lib/content";
import Image from "next/image";

const Header = () => {

  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ZzzIcon className="text-primary h-6 w-6" />
            <span className="font-headline font-semibold text-foreground/80">SonoCerto</span>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={siteConfig.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contato via WhatsApp"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="https://i.imgur.com/9ncP3Sr.png"
                alt="Ícone do WhatsApp"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
