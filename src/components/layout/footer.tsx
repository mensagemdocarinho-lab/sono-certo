import { siteConfig } from "@/lib/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <footer className="border-t bg-card text-muted-foreground">
      <div className="container mx-auto px-4 py-4 text-center text-sm">
        <p>
          &copy; {currentYear} {siteConfig.author}. Todos os direitos reservados.
        </p>
        <p className="mt-1">
          <a href={siteConfig.contactUrl} className="underline hover:text-primary">
            Contato
          </a>
          {' | '}
          Última atualização: {lastUpdated}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
