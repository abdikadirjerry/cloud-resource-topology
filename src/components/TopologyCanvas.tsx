import React from "react";
import type { CloudResource } from "../types/cloud";

interface TopologyCanvasProps {
  resources: CloudResource[];
  selectedId: string | null;
  onSelectResource: (id: string) => void;
  onRemoveResource: (id: string) => void;
  onClearAll: () => void;
}

export const TopologyCanvas: React.FC<TopologyCanvasProps> = ({
  resources,
  selectedId,
  onSelectResource,
  onRemoveResource,
  onClearAll,
}) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col flex-1 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
          Virtual Private Cloud (VPC) Topology Canvas
        </h2>
        {resources.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-[11px] text-rose-400 hover:text-rose-300 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-lg transition-colors"
          >
            Reset Topology
          </button>
        )}
      </div>

      <div className="flex-1 min-h-[420px] bg-slate-950 border border-slate-800/80 rounded-xl relative p-6 overflow-auto flex flex-col justify-center items-center">
        {resources.length > 0 ? (
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {resources.map((res) => {
              const isSelected = selectedId === res.id;
              return (
                <div
                  key={res.id}
                  onClick={() => onSelectResource(res.id)}
                  className={`bg-slate-900 border p-4 rounded-xl cursor-pointer transition-all space-y-3 relative group ${
                    isSelected
                      ? "border-orange-500 shadow-lg shadow-orange-950/50 bg-slate-900/90"
                      : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase">
                      {res.type}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveResource(res.id);
                      }}
                      className="text-slate-500 hover:text-rose-400 text-xs px-1"
                    >
                      ✕
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-100">
                      {res.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {res.region} • ${res.monthlyCost}/mo
                    </p>
                  </div>

                  <div className="text-[10px] bg-slate-950 p-2 rounded-lg border border-slate-800 text-slate-400 space-y-0.5">
                    <div>
                      CPU:{" "}
                      <strong className="text-slate-200">
                        {res.specs.cpu || "N/A"}
                      </strong>
                    </div>
                    <div>
                      RAM:{" "}
                      <strong className="text-slate-200">
                        {res.specs.ram || "N/A"}
                      </strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center space-y-2 py-20">
            <div className="text-3xl">🏗️</div>
            <p className="text-xs text-slate-400 font-bold">
              Your cloud topology is currently empty.
            </p>
            <p className="text-[11px] text-slate-500">
              Select components from the left catalog to deploy your
              architecture.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
