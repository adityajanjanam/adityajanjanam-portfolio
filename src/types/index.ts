import { Dispatch, SetStateAction } from 'react';

export interface BaseComponentProps {
  setActiveTab?: (tab: string) => void;
}

export interface HomeProps extends BaseComponentProps {}
export interface ExperienceProps extends BaseComponentProps {}
export interface EducationProps extends BaseComponentProps {}
export interface ProjectsProps extends BaseComponentProps {}
export interface ContactFormProps extends BaseComponentProps {}
export interface ApplicationPackagingProps extends BaseComponentProps {}

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