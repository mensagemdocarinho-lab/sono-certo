import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { skinRecoveryContent } from "@/lib/content";
import { Sparkles, HeartPulse, Droplets, ZapOff } from "lucide-react";

const icons = {
  "Reparo Celular e Colágeno": <Sparkles key="sparkles" />,
  "O Hormônio do Crescimento (HGH)": <HeartPulse key="heart" />,
  "Redução do Cortisol (Hormônio do Estresse)": <ZapOff key="zapoff" />,
  "Hidratação Noturna Otimizada": <Droplets key="droplets" />,
};

const SkinRecoveryTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{skinRecoveryContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{skinRecoveryContent.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skinRecoveryContent.items.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-primary">{icons[item.title as keyof typeof icons]}</span>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkinRecoveryTab;
