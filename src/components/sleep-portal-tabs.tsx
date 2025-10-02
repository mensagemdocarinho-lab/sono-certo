"use client";

import { tabsConfig } from "@/lib/content";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PortalHome = () => {
  return (
    <div>
       <div className="mb-12 text-center">
          <h2 className="font-headline font-bold text-text-1">Revista do Sono: Seu Guia Interativo</h2>
          <p className="mt-2 text-lg text-text-2">Explore nossos guias práticos para transformar suas noites.</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tabsConfig.map((tab, index) => (
          <Card 
            key={tab.value} 
            id={tab.value === 'sos-anchor' ? 'sos' : undefined}
            className="flex flex-col overflow-hidden transition-all duration-150 ease-in-out bg-bg-1 border-border shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 hover:border-primary/40"
            >
             <Link href={tab.href} target={'_blank'} rel="noopener noreferrer" className="flex flex-col h-full group">
                <CardHeader className="p-0 relative">
                  <Image 
                    src={tab.image} 
                    alt={tab.title} 
                    width={400} 
                    height={200}
                    data-ai-hint={tab.imageHint}
                    className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="flex-grow p-5">
                  <CardTitle className="text-xl font-bold font-headline leading-tight text-text-1 line-clamp-2">{tab.title}</CardTitle>
                  <CardDescription className="mt-2 text-base text-text-2 line-clamp-2">{tab.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                    <div className="text-primary font-semibold flex items-center group-hover:text-primary-600 transition-colors">
                        {tab.value === 'sos-anchor' ? 'Ver Guia Rápido' : 'Ler Artigo'}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
  return <PortalHome />;
};

export default SleepPortalTabs;
