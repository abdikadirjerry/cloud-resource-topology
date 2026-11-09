import React from "react";
import { RESOURCE_CATALOG } from "../data/catalog";
import type { ResourceTemplate } from "../types/cloud";

interface ResourcePaletteProps {
  onAddResource: (template: ResourceTemplate) => void;
}

export const ResourcePalette: React.FC<ResourcePaletteProps> = ({
  onAddResource,
}) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-4">
      <h2 className="text-xs font-bold text-orange-400 uppercase tracking-wider">
        Infrastructure Component Catalog
      </h2>
      <p className="text-[11px] text-slate-400">
        Click any service to deploy it into your active cloud topology.
      </p>

      <div className="space-y-2.5">
        {RESOURCE_CATALOG.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onAddResource(item)}
            className="w-full text-left bg-slate-950 border border-slate-800 hover:border-orange-500/40 p-3 rounded-xl transition-all group flex justify-between items-center"
          >
            <div>
              <span className="text-xs font-bold text-slate-200 group-hover:text-orange-300 transition-colors block">
                + {item.name}
              </span>
              <span className="text-[10px] text-slate-500">
                {item.specs.cpu} | {item.specs.ram} | {item.specs.storage}
              </span>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-lg">
              ${item.monthlyCost}/mo
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
