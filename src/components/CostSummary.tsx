import React from "react";
import type { CloudResource } from "../types/cloud";

interface CostSummaryProps {
  resources: CloudResource[];
}

export const CostSummary: React.FC<CostSummaryProps> = ({ resources }) => {
  const total = resources.reduce((acc, r) => acc + r.monthlyCost, 0);
  const annual = total * 12;

  const typeCounts = resources.reduce((acc: Record<string, number>, r) => {
    acc[r.type] = (acc[r.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-4">
      <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
        Financial & Resource Telemetry
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block">
            Monthly Run Rate
          </span>
          <span className="text-base font-bold text-emerald-400">
            ${total.toLocaleString()}
          </span>
        </div>
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block">
            Annual Projection
          </span>
          <span className="text-base font-bold text-cyan-400">
            ${annual.toLocaleString()}
          </span>
        </div>
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block">
            Active Services
          </span>
          <span className="text-base font-bold text-orange-400">
            {resources.length} Nodes
          </span>
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
          Service Category Distribution
        </span>
        <div className="flex flex-wrap gap-2">
          {Object.entries(typeCounts).length > 0 ? (
            Object.entries(typeCounts).map(([type, count]) => (
              <span
                key={type}
                className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300"
              >
                <strong className="text-orange-400 uppercase">{type}:</strong>{" "}
                {count}
              </span>
            ))
          ) : (
            <span className="text-xs text-slate-500">
              No active service allocations.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
