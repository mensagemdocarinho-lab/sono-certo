"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsConfig } from "@/lib/content";
import StartHereTab from "./tabs/start-here";
import SosTab from "./tabs/sos";
import NightRoutineTab from "./tabs/night-routine";
import EssentialsTab from "./tabs/caffeine-screens-light";
import ToolsPlannersTab from "./tabs/tools-planners";
import TravelJetlagTab from "./tabs/travel-jetlag";
import FaqTab from "./tabs/faq";
import AITipGenerator from "./tabs/ai-tip-generator";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const tabComponents: { [key: string]: React.ComponentType } = {
  start: StartHereTab,
  sos: SosTab,
  routine: NightRoutineTab,
  essentials: EssentialsTab,
  tools: ToolsPlannersTab,
  travel: TravelJetlagTab,
  faq: FaqTab,
  "ai-tip": AITipGenerator,
};

const SleepPortalTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || tabsConfig[0].value);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tabsConfig.some(t => t.value === tab)) {
      setActiveTab(tab);
    } else {
       // Set default tab in URL if none is present
       const params = new URLSearchParams(searchParams.toString());
       params.set('tab', tabsConfig[0].value);
       router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, router, pathname]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <ScrollArea className="w-full whitespace-nowrap">
        <TabsList className="inline-flex h-auto w-max">
          {tabsConfig.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-sm">
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {tabsConfig.map((tab) => {
        const TabComponent = tabComponents[tab.value];
        return (
          <TabsContent key={tab.value} value={tab.value} className="mt-6">
            {TabComponent ? <TabComponent /> : <div>Conteúdo em breve.</div>}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default SleepPortalTabs;
