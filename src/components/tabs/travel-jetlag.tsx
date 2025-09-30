import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { travelContent } from "@/lib/content";
import { CalendarCheck, CheckCircle } from "lucide-react";

const TravelJetlagTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold">{travelContent.title}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{travelContent.description}</p>
      </div>

      <div className="space-y-4">
        {travelContent.protocols.map((protocol, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarCheck className="h-5 w-5 text-primary" />
                {protocol.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{protocol.content}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelJetlagTab;
