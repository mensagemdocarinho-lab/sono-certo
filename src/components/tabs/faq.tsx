import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { faqContent } from "@/lib/content";
import { HelpCircle, Leaf } from "lucide-react";

const FaqTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{faqContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{faqContent.description}</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {faqContent.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-left">
                    <Leaf className="h-4 w-4 text-primary flex-shrink-0" />
                    {faq.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FaqTab;
