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
    suffix: "+",
    description:
      "Students and Coaches with years of FIRST Tech Challenge experience",
  },
  {
    title: "Awards Earned",
    maxNumber: 15,
    suffix: "+",
    description: "Inspire, Control, and Think",
  },
  {
    title: "Team Members",
    maxNumber: 11,
    suffix: "",
    description: "Students from Grades 7-12",
  },
  {
    title: "Outreach Hours",
    maxNumber: 2800,
    suffix: "+",
    description: "Community workshops & demos",
  },
];
