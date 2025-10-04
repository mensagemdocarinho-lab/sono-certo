"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckSquare, DraftingCompass, Smile, Frown, Meh } from 'lucide-react';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const Stepper = () => (
  <div className="flex justify-center items-center space-x-2 md:space-x-8 mb-12">
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-2">
        <DraftingCompass className="w-6 h-6" />
      </div>
      <p className="font-semibold text-sm">1. Responder 3 perguntas</p>
    </div>
    <div className="flex-1 h-px bg-border hidden sm:block"></div>
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bg-2 border border-border text-muted-foreground mb-2">
        <CheckSquare className="w-6 h-6" />
      </div>
      <p className="font-semibold text-sm text-muted-foreground">2. Receber plano de 10 min</p>
    </div>
     <div className="flex-1 h-px bg-border hidden sm:block"></div>
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bg-2 border border-border text-muted-foreground mb-2">
        <Smile className="w-6 h-6" />
      </div>
      <p className="font-semibold text-sm text-muted-foreground">3. Acompanhar amanhã</p>
    </div>
  </div>
);

const PlanForm = ({ onPlanGenerated }: { onPlanGenerated: (plan: any) => void }) => {
  const [stressLevel, setStressLevel] = useState([3]);
  const [usedScreens, setUsedScreens] = useState<string | undefined>(undefined);
  const [hadCaffeine, setHadCaffeine] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an AI service.
    // Here we generate a mock plan based on inputs.
    const plan = {
      title: "Seu Plano Personalizado para Hoje",
      steps: [
        { text: stressLevel[0] > 3 ? "Técnica de respiração 4-7-8 por 3 minutos para acalmar a mente." : "Escaneamento corporal guiado por 5 minutos para relaxar os músculos." },
        { text: usedScreens === 'yes' ? "Desligar todas as telas e ler um livro físico por 10 minutos sob luz fraca." : "Ouvir 10 minutos de música ambiente ou um podcast relaxante." },
        { text: hadCaffeine === 'yes' ? "Beber um copo de água e anotar pensamentos em um diário por 5 minutos." : "Fazer 5 minutos de alongamento leve para liberar a tensão do corpo." }
      ],
      estimatedTime: "15-20 min",
      effortLevel: "Baixo"
    };
    onPlanGenerated(plan);
  };

  return (
    <Card className="max-w-2xl mx-auto bg-bg-1 border-border shadow-lg">
      <CardHeader>
        <CardTitle>Gerar plano em 30s</CardTitle>
        <CardDescription>Responda 3 perguntas rápidas para receber um plano de ação para esta noite.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <Label htmlFor="stress-level">Nível de estresse hoje (1-5)</Label>
            <Slider
              id="stress-level"
              min={1}
              max={5}
              step={1}
              value={stressLevel}
              onValueChange={setStressLevel}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
                <span>Baixo</span>
                <span>Médio</span>
                <span>Alto</span>
            </div>
          </div>
          <div className="space-y-3">
             <Label>Usou telas (celular, TV) nas últimas 2 horas?</Label>
             <RadioGroup onValueChange={setUsedScreens} value={usedScreens} className="flex gap-4">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="screens-yes" />
                    <Label htmlFor="screens-yes">Sim</Label>
                </div>
                 <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="screens-no" />
                    <Label htmlFor="screens-no">Não</Label>
                </div>
             </RadioGroup>
          </div>
           <div className="space-y-3">
             <Label>Tomou cafeína (café, chá, refri) após as 14h?</Label>
             <RadioGroup onValueChange={setHadCaffeine} value={hadCaffeine} className="flex gap-4">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="caffeine-yes" />
                    <Label htmlFor="caffeine-yes">Sim</Label>
                </div>
                 <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="caffeine-no" />
                    <Label htmlFor="caffeine-no">Não</Label>
                </div>
             </RadioGroup>
          </div>
          <Button type="submit" className="w-full min-w-[180px]" disabled={!usedScreens || !hadCaffeine}>
            Gerar plano para hoje
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const PlanDisplay = ({ plan, onReset }: { plan: any, onReset: () => void }) => {
    const [completed, setCompleted] = useState(false);
    return (
        <Card className="max-w-2xl mx-auto bg-bg-1 border-primary/40 shadow-lg">
            <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Tempo estimado: {plan.estimatedTime}</span>
                    <span>Nível de esforço: {plan.effortLevel}</span>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <ul className="space-y-3">
                    {plan.steps.map((step: any, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0 mt-1">{index + 1}</span>
                            <p className="text-text-2">{step.text}</p>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button onClick={() => setCompleted(true)} className="w-full" disabled={completed}>
                        {completed ? 'Plano Concluído!' : 'Marcar como feito'}
                    </Button>
                    <Button variant="outline" onClick={onReset} className="w-full">
                        Gerar Novo Plano
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};


const DailyPlanGenerator = () => {
    const [plan, setPlan] = useState<any | null>(null);

    const handlePlanGenerated = (newPlan: any) => {
        setPlan(newPlan);
        const element = document.getElementById('daily-plan');
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const handleReset = () => {
        setPlan(null);
    }

    return (
        <section>
            <Stepper />
            {plan ? (
                <PlanDisplay plan={plan} onReset={handleReset} />
            ) : (
                <PlanForm onPlanGenerated={handlePlanGenerated} />
            )}
        </section>
    );
}

export default DailyPlanGenerator;
