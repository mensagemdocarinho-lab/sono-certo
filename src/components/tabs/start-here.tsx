"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ClipboardCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import useLocalStorage from "@/hooks/use-local-storage";
import { startHereContent } from "@/lib/content";

const StartHereTab = () => {
  const { toast } = useToast();
  const [checkedItems, setCheckedItems] = useLocalStorage<string[]>("startHereChecklist", []);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckedItems(prev =>
      checked ? [...prev, id] : prev.filter(item => item !== id)
    );
  };

  const handleCopyChecklist = () => {
    const checklistText = startHereContent.checklist.items.map(item => `- ${item.label}`).join("\n");
    navigator.clipboard.writeText(checklistText);
    toast({
      title: "Checklist copiado!",
      description: "Você pode colar a lista em seu app de anotações.",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{startHereContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{startHereContent.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {startHereContent.cards.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2">
              {card.actions.map((action, actionIndex) => (
                <Button key={actionIndex} variant={actionIndex === 0 ? "secondary" : "default"}>
                  {action.label}
                </Button>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{startHereContent.checklist.title}</CardTitle>
              <CardDescription>Marque os itens conforme for completando.</CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={handleCopyChecklist}>
              <ClipboardCheck className="h-5 w-5" />
              <span className="sr-only">Copiar Checklist</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {startHereContent.checklist.items.map(item => (
            <div key={item.id} className="flex items-center space-x-3">
              <Checkbox
                id={item.id}
                checked={checkedItems.includes(item.id)}
                onCheckedChange={(checked) => handleCheckboxChange(item.id, !!checked)}
              />
              <Label
                htmlFor={item.id}
                className={`text-base ${checkedItems.includes(item.id) ? "line-through text-muted-foreground" : ""}`}
              >
                {item.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StartHereTab;
