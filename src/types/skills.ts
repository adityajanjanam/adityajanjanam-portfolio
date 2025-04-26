export interface Skill {
  name: string;
  level: number;
}

export interface SkillsChartProps {
  skills: Skill[];
  isDarkMode: boolean;
}

export interface SkillsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
} 