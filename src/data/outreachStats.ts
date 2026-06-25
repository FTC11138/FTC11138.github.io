export type OutreachStat = {
  label: string;
  maxNumber: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export const outreachStats: OutreachStat[] = [
  { label: "Hours This Season", maxNumber: 400, suffix: "+" },
  { label: "People Reached", maxNumber: 2600, suffix: "+" },
  { label: "Events", maxNumber: 30, suffix: "+" },
  { label: "Social Media Views", maxNumber: 24, suffix: "k" },
];
