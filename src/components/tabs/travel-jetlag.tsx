import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { travelContent } from "@/lib/content";
import { Plane } from "lucide-react";

const TravelJetlagTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{travelContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{travelContent.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {travelContent.protocols.map((protocol, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-primary" />
                {protocol.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{protocol.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelJetlagTab;
