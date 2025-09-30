import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toolsContent } from "@/lib/content";
import { Download, Globe, BookOpen, Utensils } from "lucide-react";

const icons = [<Globe key="globe" />, <BookOpen key="book" />, <Utensils key="utensils" />];

const ToolsPlannersTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{toolsContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{toolsContent.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {toolsContent.tools.map((tool, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">{icons[index]}</span>
                {tool.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="text-center text-sm text-muted-foreground pt-4">
        <p>Lembre-se: remédios naturais podem interagir com outros medicamentos. Consulte um profissional de saúde.</p>
      </div>
    </div>
  );
};

export default ToolsPlannersTab;
