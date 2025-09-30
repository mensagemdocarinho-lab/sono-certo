"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Printer } from "lucide-react";
import BreathingTimer from "@/components/breathing-timer";
import { sosContent } from "@/lib/content";

const SosTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{sosContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{sosContent.description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rota Expressa de Volta ao Sono</CardTitle>
          <CardDescription>Siga este fluxograma de decisões simples.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-stretch justify-around gap-4">
            {sosContent.flowchart.map((step, index) => (
              <>
                <div key={step.step} className="flex-1 text-center p-4 bg-secondary rounded-lg">
                  <p className="font-bold text-primary">Passo {step.step}</p>
                  <p className="mt-1 font-semibold">{step.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step.decision}</p>
                </div>
                {index < sosContent.flowchart.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Técnicas Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {sosContent.techniques.map((tech, index) => (
                        <div key={index}>
                            <h3 className="font-semibold">{tech.title}</h3>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
             <Button variant="outline" className="w-full" onClick={() => window.print()}>
                <Printer className="mr-2 h-4 w-4" />
                Imprimir 1 Página SOS
            </Button>
        </div>

        <BreathingTimer />
      </div>

    </div>
  );
};

export default SosTab;
