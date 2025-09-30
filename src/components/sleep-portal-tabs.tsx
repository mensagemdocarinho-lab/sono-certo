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
       <div className="mb-8 text-center">
          <h2 className="text-3xl font-headline font-bold">Revista do Sono: Seu Guia Interativo</h2>
          <p className="mt-2 text-lg text-muted-foreground">Explore nossos guias práticos para transformar suas noites.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tabsConfig.map((tab) => (
          <Card key={tab.value} className="flex flex-col overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
             <Link href={tab.href} target={tab.value === 'ai-tip' ? '_self' : '_blank'} rel="noopener noreferrer" className="flex flex-col h-full">
                <CardHeader className="p-0">
                  <Image 
                    src={tab.image} 
                    alt={tab.title} 
                    width={400} 
                    height={200}
                    data-ai-hint={tab.imageHint}
                    className="w-full h-40 object-cover" />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-lg font-bold font-headline">{tab.title}</CardTitle>
                  <CardDescription className="mt-1 text-sm">{tab.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button variant="link" className="p-0 h-auto text-primary">
                        {tab.value === 'ai-tip' ? 'Gerar Dica' : 'Ler Artigo'}
                        {tab.value === 'ai-tip' ? <Sparkles className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
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
