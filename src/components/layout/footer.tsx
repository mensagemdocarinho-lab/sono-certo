import { siteConfig } from "@/lib/content";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent mt-12 mb-6">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-text-2">
        <p>
          &copy; {currentYear} {siteConfig.author}. Todos os direitos reservados.
        </p>
        <a 
          href={siteConfig.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato via WhatsApp"
          className="mt-4 inline-block transition-transform hover:scale-110"
        >
          <Image
            src="https://i.imgur.com/9ncP3Sr.png"
            alt="Ícone do WhatsApp"
            width={40}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
