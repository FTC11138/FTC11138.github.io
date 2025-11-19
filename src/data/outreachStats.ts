export type OutreachStat = {
  label: string;
  maxNumber: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export const outreachStats: OutreachStat[] = [
  { label: "Hours This Season", maxNumber: 294.5, decimals: 1 },
  { label: "People Reached", maxNumber: 2524 },
  { label: "Events", maxNumber: 31 },
  { label: "Social Media Views", maxNumber: 19.7, suffix: "k", decimals: 1 },
];
