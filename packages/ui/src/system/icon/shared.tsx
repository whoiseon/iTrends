// using icons
const ICONS = [
  'Camera',
  'ChevronLeft',
  // ...add more icons
] as const;

type IconName = (typeof ICONS)[number];

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};
