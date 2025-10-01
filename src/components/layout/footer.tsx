import { siteConfig } from "@/lib/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        <p>
          &copy; {currentYear} {siteConfig.author}. Todos os direitos reservados.
        </p>
        <p className="mt-1">
          <a href={siteConfig.contactUrl} className="underline hover:text-primary">
            Contato
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
