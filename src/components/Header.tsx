import React from "react";
import type { CloudProvider } from "../types/cloud";

interface HeaderProps {
  provider: CloudProvider;
  setProvider: (p: CloudProvider) => void;
  totalCost: number;
  resourceCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  provider,
  setProvider,
  totalCost,
  resourceCount,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex flex-wrap items-center justify-between sticky top-0 z-40 backdrop-blur-md gap-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold shadow-lg shadow-orange-950/50">
          ☁️
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 tracking-wider uppercase">
            CLOUD-TOPOLOGY // Infrastructure Architect
          </h1>
          <p className="text-[10px] text-slate-400">
            ENTERPRISE TOPOLOGY DESIGNER & COST ESTIMATOR
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 p-1 rounded-xl">
          {(["AWS", "GCP", "Azure"] as CloudProvider[]).map((p) => (
            <button
              key={p}
              onClick={() => setProvider(p)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                provider === p
                  ? "bg-orange-500/20 border border-orange-500/50 text-orange-300"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="text-xs bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl flex items-center gap-3">
          <div>
            <span className="text-[10px] text-slate-500 block">Resources</span>
            <span className="text-slate-200 font-bold">
              {resourceCount} Nodes
            </span>
          </div>
          <div className="border-l border-slate-800 pl-3">
            <span className="text-[10px] text-slate-500 block">
              Est. Monthly Cost
            </span>
            <span className="text-emerald-400 font-bold">
              ${totalCost.toLocaleString()} / mo
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
