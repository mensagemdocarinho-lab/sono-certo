import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { essentialsContent } from "@/lib/content";
import { Coffee, Smartphone, Sun } from "lucide-react";

const icons = [<Coffee key="coffee"/>, <Smartphone key="smartphone"/>, <Sun key="sun"/>]

const EssentialsTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{essentialsContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{essentialsContent.description}</p>
      </div>

      <div className="space-y-6">
        {essentialsContent.items.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">{icons[index]}</span>
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

export default EssentialsTab;
