import { Dispatch, SetStateAction } from "react";

export interface BaseComponentProps {
  setActiveTab?: (tab: string) => void;
}

export type HomeProps = BaseComponentProps;
export type ExperienceProps = BaseComponentProps;
export type EducationProps = BaseComponentProps;
export type ProjectsProps = BaseComponentProps;
export type ContactFormProps = BaseComponentProps;
export type ApplicationPackagingProps = BaseComponentProps;

export interface NavLinksProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

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
