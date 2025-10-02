"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Bot, Loader, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  stressLevel: z
    .number()
    .min(1)
    .max(5)
    .default(3),
  caffeineIntake: z
    .enum(["none", "low", "moderate", "high"])
    .default("moderate"),
  screenTime: z.coerce.number().min(0).max(24).default(2),
  exerciseFrequency: z
    .enum(["none", "rarely", "sometimes", "often"])
    .default("sometimes"),
  sleepEnvironment: z
    .string()
    .min(10, "Por favor, descreva um pouco mais seu ambiente.")
    .default("Quarto escuro e geralmente quieto."),
});

type FormValues = z.infer<typeof formSchema>;

const AITipGenerator = () => {
  const [tip, setTip] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [lastSubmittedValues, setLastSubmittedValues] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stressLevel: 3,
      caffeineIntake: "moderate",
      screenTime: 2,
      exerciseFrequency: "sometimes",
      sleepEnvironment: "Quarto escuro e geralmente quieto.",
    },
  });

  const getTip = async (values: FormValues) => {
    setIsLoading(true);
    setTip(null);
    console.log("Requesting tip with payload:", values);

    try {
      const response = await fetch('/api/dicas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      console.log(`Response status: ${response.status}`);
      const responseBody = await response.json();

      if (!response.ok) {
        throw new Error(responseBody.error || `Request failed with status ${response.status}`);
      }
      
      console.log("Received tip:", responseBody.sleepTip);
      setTip(responseBody.sleepTip);

    } catch (error: any) {
      console.error("Error generating sleep tip:", error);
      toast({
        variant: "destructive",
        title: "Erro ao gerar a dica",
        description: "Houve um problema ao se comunicar com a IA. Por favor, tente novamente.",
        action: (
           <Button variant="secondary" onClick={() => getTip(values)}>Tentar de Novo</Button>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(values: FormValues) {
    setLastSubmittedValues(values);
    await getTip(values);
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold flex items-center gap-2">
            <Sparkles className="text-primary"/>
            Adormecer em 10-20 Minutos: Guia Prático com IA
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Receba uma técnica ou dica de um especialista em sono, personalizada para você, para adormecer mais rápido hoje à noite.
        </p>
      </div>

      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Conte-me sobre seu dia</CardTitle>
              <CardDescription>
                Suas respostas nos ajudam a criar a melhor recomendação para você. Não são armazenadas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="stressLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nível de Estresse hoje (1-5)</FormLabel>
                    <FormControl>
                      <>
                        <Slider
                          min={1}
                          max={5}
                          step={1}
                          value={[field.value]}
                          onValueChange={(value) => field.onChange(value[0])}
                        />
                         <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Baixo</span>
                            <span>Médio</span>
                            <span>Alto</span>
                        </div>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-6">
                 <FormField
                    control={form.control}
                    name="caffeineIntake"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Consumo de Cafeína hoje</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Selecione seu consumo" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="none">Nenhum</SelectItem>
                            <SelectItem value="low">Baixo (ex: 1 café/dia)</SelectItem>
                            <SelectItem value="moderate">Moderado (ex: 2-3 cafés/dia)</SelectItem>
                            <SelectItem value="high">Alto (ex: 4+ cafés/dia)</SelectItem>
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="exerciseFrequency"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Frequência de Exercícios</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder="Selecione a frequência" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="none">Nenhuma</SelectItem>
                            <SelectItem value="rarely">Raramente</SelectItem>
                            <SelectItem value="sometimes">Às vezes (1-2x/sem)</SelectItem>
                            <SelectItem value="often">Frequente (3+x/sem)</SelectItem>
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                    )}
                />
              </div>

               <FormField
                control={form.control}
                name="screenTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tempo de tela antes de dormir (horas)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Ex: 2" {...field} />
                    </FormControl>
                    <FormDescription>
                      Quantas horas você passa em frente a telas (celular, TV, etc.) antes de deitar?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sleepEnvironment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ambiente de Sono</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: Meu quarto é escuro, mas ouço barulho da rua."
                        {...field}
                      />
                    </FormControl>
                     <FormDescription>
                      Descreva brevemente seu quarto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'Gerando dica...' : 'Gerar Dica Prática'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
         <Card className="bg-secondary">
            <CardContent className="pt-6 flex items-center justify-center gap-4">
                <Loader className="h-8 w-8 animate-spin text-primary"/>
                <p className="text-muted-foreground">Analisando seus hábitos e gerando uma dica...</p>
            </CardContent>
         </Card>
      )}

      {tip && (
        <Card className="bg-accent/50 border-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              Sua Dica Personalizada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">{tip}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AITipGenerator;
