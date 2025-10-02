"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Bot, Loader, AlertTriangle, Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import useLocalStorage from "@/hooks/use-local-storage";
import { cn } from "@/lib/utils";

type TipResult = {
  title: string;
  why: string;
  steps: string[];
  totalTime: string;
};

const contextChips = ["Cafeína", "Telas", "Estresse"];

const AITipGenerator = () => {
  const [description, setDescription] = useState("");
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [result, setResult] = useLocalStorage<TipResult | null>("sonozen_last_plan", null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const resultCardRef = useRef<HTMLDivElement>(null);
  const [hasCopied, setHasCopied] = useState(false);


  useEffect(() => {
    if (result && resultCardRef.current) {
      resultCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  const handleChipClick = (chip: string) => {
    setSelectedChips(prev =>
      prev.includes(chip) ? prev.filter(c => c !== chip) : [...prev, chip]
    );
  };

  const getFallbackPlan = (): TipResult => {
      if (selectedChips.includes("Cafeína")) {
          return { title: "Plano Detox Noturno", why: "Reduzir estimulantes e acalmar o sistema nervoso para preparar o corpo para o descanso.", steps: ["Beba um copo de água para ajudar na hidratação.", "Faça 5 minutos da respiração 4-7-8 (inspire 4s, segure 7s, expire 8s).", "Evite cafeína por pelo menos 8 horas antes de dormir amanhã."], totalTime: "~5-10 min" };
      }
      if (selectedChips.includes("Telas")) {
          return { title: "Plano 'Curfew' Digital", why: "Minimizar a exposição à luz azul que inibe a produção de melatonina, o hormônio do sono.", steps: ["Ative o 'modo noturno' do seu celular com tons quentes.", "Faça 3 minutos de alongamento suave para pescoço e ombros.", "Deixe todos os eletrônicos a pelo menos 2 metros da cama."], totalTime: "~5 min" };
      }
      if (selectedChips.includes("Estresse")) {
          return { title: "Plano Mente Calma", why: "Acalmar o sistema nervoso e processar pensamentos ansiosos para liberar a mente.", steps: ["Pratique a respiração 'caixa' por 3 minutos (4s inspira, 4s segura, 4s expira, 4s segura).", "Faça um 'scan corporal' mental, relaxando cada parte do corpo, dos pés à cabeça.", "Escreva por 2 minutos em um caderno qualquer pensamento que esteja na sua mente."], totalTime: "~10 min" };
      }
      return { title: "Protocolo Base de Relaxamento", why: "Sinalizar ao seu corpo e mente que é hora de desacelerar e se preparar para o sono.", steps: ["Diminua as luzes do ambiente, usando apenas um abajur de luz quente.", "Pratique a respiração 4-7-8 por 5 minutos.", "Leia algumas páginas de um livro físico (não-digital) que não seja muito estimulante."], totalTime: "~10-15 min" };
  };


  const getPlan = async () => {
    setIsLoading(true);
    setResult(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    try {
      const response = await fetch('/api/dicas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userDescription: description,
          contextTags: selectedChips,
        }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data: TipResult = await response.json();
      if (data && data.title) {
        setResult(data);
      } else {
        throw new Error("Invalid response from AI");
      }

    } catch (error: any) {
      console.error("Error generating sleep plan, using fallback:", error.message);
      clearTimeout(timeoutId);
      setResult(getFallbackPlan());
      toast({
        title: "Usando um plano de backup",
        description: "A IA não pôde responder, mas geramos um plano local para você.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const copyToClipboard = () => {
    if (!result) return;
    const textToCopy = `Plano de 10 Minutos: ${result.title}\n\n${result.why}\n\nPassos:\n${result.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\nTempo: ${result.totalTime}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        setHasCopied(true);
        toast({ title: "Plano copiado!" });
        setTimeout(() => setHasCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold flex items-center justify-center gap-2">
            <Sparkles className="text-primary"/>
            Assistente de Rotas de Sono
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Receba um plano de 10 minutos para relaxar e preparar seu corpo para dormir.
        </p>
      </div>

      <Card className="bg-card/70 backdrop-blur-sm border-white/10">
        <CardContent className="pt-6 space-y-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground/80 mb-2">
              Como foi seu dia e o que está te atrapalhando hoje?
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Tive um dia estressante e não consigo parar de pensar no trabalho..."
              className="bg-background/50 border-white/20"
            />
          </div>

          <div>
             <p className="block text-sm font-medium text-foreground/80 mb-2">Selecione um contexto (opcional):</p>
             <div className="flex flex-wrap gap-2">
                {contextChips.map(chip => (
                    <button
                        key={chip}
                        onClick={() => handleChipClick(chip)}
                        className={cn(
                            "px-3 py-1 text-sm rounded-full transition-colors border",
                            selectedChips.includes(chip)
                                ? "bg-primary border-primary text-primary-foreground"
                                : "bg-transparent border-white/20 hover:bg-white/10"
                        )}
                    >
                        {chip}
                    </button>
                ))}
             </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button onClick={getPlan} disabled={isLoading} size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-150">
          {isLoading ? (
            <Loader className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5" />
          )}
          {isLoading ? 'Gerando plano...' : 'Gerar plano de 10 minutos'}
        </Button>
        <p className="text-xs text-muted-foreground mt-3">Não é aconselhamento médico.</p>
      </div>

      <div aria-live="polite">
      {isLoading && (
         <Card className="bg-card/70 backdrop-blur-sm border-white/10 animate-fade-in-up">
            <CardContent className="pt-6 flex items-center justify-center gap-4">
                <Loader className="h-6 w-6 animate-spin text-primary"/>
                <p className="text-muted-foreground">Analisando sua rota de sono...</p>
            </CardContent>
         </Card>
      )}

      {result && (
        <div ref={resultCardRef} className="animate-fade-in-up animation-delay-300">
            <Card className="bg-card/80 backdrop-blur-md border-white/10 shadow-xl overflow-hidden">
                <CardHeader className="p-4 bg-white/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Plano de 10 minutos</span>
                    <CardTitle className="flex items-center gap-2 text-xl font-headline">
                        <Bot className="h-5 w-5 text-secondary" />
                        {result.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 space-y-4">
                    <div>
                        <h4 className="font-semibold text-secondary">Por que funciona</h4>
                        <p className="text-sm text-foreground/80 mt-1">{result.why}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-secondary">Passos</h4>
                        <ol className="mt-2 space-y-2 list-inside">
                        {result.steps.map((step, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary font-bold text-xs mr-3 flex-shrink-0">{index + 1}</span>
                                <span className="text-foreground/90">{step}</span>
                            </li>
                        ))}
                        </ol>
                    </div>

                    <div className="text-right text-sm font-medium text-muted-foreground">
                        Tempo total: {result.totalTime}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                           {hasCopied ? <Check className="mr-2" /> : <Copy className="mr-2" />}
                           {hasCopied ? 'Copiado!' : 'Copiar'}
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setResult(result)}>Salvar Local</Button>
                        <Button variant="ghost" size="sm" onClick={getPlan}>Gerar Novamente</Button>
                    </div>

                </CardContent>
            </Card>
        </div>
      )}
      </div>
    </div>
  );
};

export default AITipGenerator;
