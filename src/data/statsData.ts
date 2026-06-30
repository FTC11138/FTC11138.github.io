export interface StatItem {
  title: string;
  maxNumber: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description?: string;
}

export const statsData: StatItem[] = [
  {
    title: "Seasons Competed",
    maxNumber: 10,
    suffix: "",
    description: "Since our rookie year in 2016",
  },
  {
    title: "Awards & Placements",
    maxNumber: 32,
    suffix: "",
    description: "Across local, state, and world events",
  },
  {
    title: "Team Members",
    maxNumber: 11,
    suffix: "",
    description: "Students from Grades 7-12",
  },
  {
    title: "Outreach Hours",
    maxNumber: 3000,
    suffix: "+",
    description: "Total community workshops & demos",
  },
];
