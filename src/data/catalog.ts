import type { ResourceTemplate } from "../types/cloud";

export const RESOURCE_CATALOG: ResourceTemplate[] = [
  {
    type: "vpc",
    name: "VPC Subnet Gateway",
    provider: "AWS",
    monthlyCost: 25,
    specs: { cpu: "N/A", ram: "N/A", storage: "10 Gbps Transit" },
  },
  {
    type: "compute",
    name: "EC2 c6i.2xlarge (App Node)",
    provider: "AWS",
    monthlyCost: 220,
    specs: { cpu: "8 vCPU", ram: "16 GB", storage: "100 GB NVMe" },
  },
  {
    type: "database",
    name: "RDS Aurora PostgreSQL Cluster",
    provider: "AWS",
    monthlyCost: 380,
    specs: { cpu: "4 vCPU", ram: "32 GB", storage: "500 GB Provisioned IOPS" },
  },
  {
    type: "loadbalancer",
    name: "Application Load Balancer (ALB)",
    provider: "AWS",
    monthlyCost: 45,
    specs: { cpu: "Auto", ram: "Managed", storage: "1M Requests / hr" },
  },
  {
    type: "cache",
    name: "ElastiCache Redis Cluster",
    provider: "AWS",
    monthlyCost: 140,
    specs: { cpu: "2 vCPU", ram: "13 GB", storage: "In-Memory" },
  },
];
