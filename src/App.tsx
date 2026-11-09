import React, { useState } from "react";
import type {
  CloudProvider,
  CloudResource,
  ResourceTemplate,
} from "./types/cloud";
import { Header } from "./components/Header";
import { ResourcePalette } from "./components/ResourcePalette";
import { TopologyCanvas } from "./components/TopologyCanvas";
import { CostSummary } from "./components/CostSummary";

export const App: React.FC = () => {
  const [provider, setProvider] = useState<CloudProvider>("AWS");
  const [resources, setResources] = useState<CloudResource[]>([
    {
      id: "res-1",
      name: "VPC Subnet Gateway",
      type: "vpc",
      provider: "AWS",
      region: "us-east-1",
      monthlyCost: 25,
      specs: { storage: "10 Gbps Transit" },
      x: 100,
      y: 100,
    },
    {
      id: "res-2",
      name: "EC2 c6i.2xlarge (App Node)",
      type: "compute",
      provider: "AWS",
      region: "us-east-1",
      monthlyCost: 220,
      specs: { cpu: "8 vCPU", ram: "16 GB" },
      x: 300,
      y: 100,
    },
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const totalCost = resources.reduce((acc, r) => acc + r.monthlyCost, 0);

  const handleAddResource = (template: ResourceTemplate) => {
    const newRes: CloudResource = {
      id: `res-${Math.random().toString(16).substring(2, 8)}`,
      name: template.name,
      type: template.type,
      provider,
      region:
        provider === "AWS"
          ? "us-east-1"
          : provider === "GCP"
            ? "us-central1"
            : "eastus",
      monthlyCost: template.monthlyCost,
      specs: template.specs,
      x: Math.floor(Math.random() * 300),
      y: Math.floor(Math.random() * 200),
    };
    setResources((prev) => [...prev, newRes]);
  };

  const handleRemoveResource = (id: string) => {
    setResources((prev) => prev.filter((r) => r.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono flex flex-col selection:bg-orange-500 selection:text-white">
      <Header
        provider={provider}
        setProvider={setProvider}
        totalCost={totalCost}
        resourceCount={resources.length}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ResourcePalette onAddResource={handleAddResource} />
          <div className="lg:col-span-2 flex flex-col">
            <TopologyCanvas
              resources={resources}
              selectedId={selectedId}
              onSelectResource={setSelectedId}
              onRemoveResource={handleRemoveResource}
              onClearAll={() => setResources([])}
            />
          </div>
        </div>

        <CostSummary resources={resources} />
      </main>
    </div>
  );
};

export default App;
