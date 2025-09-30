import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toolsContent } from "@/lib/content";
import { Download, FileText, Calendar, ListChecks } from "lucide-react";

const icons = [<FileText key="file" />, <ListChecks key="list" />, <Calendar key="calendar" />];

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
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <a href={tool.link} download target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Baixar PDF
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="text-center text-sm text-muted-foreground pt-4">
        <p>// EDITAR AQUI: Para que os downloads funcionem, substitua os links dos arquivos em <code>src/lib/content.ts</code>.</p>
        <p>Atualmente, eles baixam arquivos de placeholder.</p>
      </div>
    </div>
  );
};

export default ToolsPlannersTab;
