import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { nightRoutineContent } from "@/lib/content";
import { Zap } from "lucide-react";

const NightRoutineTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{nightRoutineContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{nightRoutineContent.description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estratégias de Relaxamento Rápido</CardTitle>
          <CardDescription>Escolha uma e pratique. O objetivo é relaxar, não forçar o sono.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {nightRoutineContent.routines.map((routine, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-left">
                    <Zap className="h-4 w-4 text-primary" />
                    {routine.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{routine.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default NightRoutineTab;
