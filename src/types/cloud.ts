export type CloudProvider = "AWS" | "GCP" | "Azure";

export type ResourceType =
  | "vpc"
  | "compute"
  | "database"
  | "loadbalancer"
  | "cache";

export interface CloudResource {
  id: string;
  name: string;
  type: ResourceType;
  provider: CloudProvider;
  region: string;
  monthlyCost: number;
  specs: {
    cpu?: string;
    ram?: string;
    storage?: string;
    iops?: number;
  };
  x: number;
  y: number;
}

export interface ResourceTemplate {
  type: ResourceType;
  name: string;
  provider: CloudProvider;
  monthlyCost: number;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
  };
}
