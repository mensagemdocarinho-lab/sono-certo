"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { tabsConfig } from "@/lib/content";
import AITipGenerator from "./tabs/ai-tip-generator";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const PortalHome = () => {
  return (
    <div>
       <div className="mb-12 text-center">
          <h2 className="text-3xl font-headline font-bold text-primary-foreground">Revista do Sono: Seu Guia Interativo</h2>
          <p className="mt-2 text-lg text-muted-foreground">Explore nossos guias práticos para transformar suas noites.</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tabsConfig.map((tab, index) => (
          <Card 
            key={tab.value} 
            id={tab.value === 'sos-anchor' ? 'sos' : undefined}
            className="flex flex-col overflow-hidden transition-all duration-150 ease-in-out border border-[rgba(255,255,255,0.06)] shadow-lg hover:shadow-primary/20 hover:scale-[1.03] hover:border-primary"
            >
             <Link href={tab.href} target={tab.value === 'ai-tip' ? '_self' : '_blank'} rel="noopener noreferrer" className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <Image 
                    src={tab.image} 
                    alt={tab.title} 
                    width={400} 
                    height={200}
                    data-ai-hint={tab.imageHint}
                    className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="flex-grow p-5">
                  <CardTitle className="text-xl font-bold font-headline leading-tight">{tab.title}</CardTitle>
                  <CardDescription className="mt-2 text-base text-foreground/70">{tab.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                    <div className="text-primary font-semibold flex items-center">
                        {tab.value === 'ai-tip' ? 'Gerar Dica' : tab.value === 'sos-anchor' ? 'Ver Guia Rápido' : 'Ler Artigo'}
                        {tab.value === 'ai-tip' ? <Sparkles className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                    </div>
                </CardFooter>
             </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};


const SleepPortalTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || "home");

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    } else {
      setActiveTab("home");
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value === "home") {
      params.delete('tab');
    } else {
      params.set('tab', value);
    }
    const newUrl = value === "home" ? pathname : `${pathname}?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  };
  
  if (activeTab !== 'ai-tip') {
    return <PortalHome />;
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <div className="mb-4">
        <Button onClick={() => handleTabChange('home')} variant="outline">
          &larr; Voltar para a Revista
        </Button>
      </div>
      <TabsContent value="ai-tip">
        <AITipGenerator />
      </TabsContent>
    </Tabs>
  );
};

export default SleepPortalTabs;
