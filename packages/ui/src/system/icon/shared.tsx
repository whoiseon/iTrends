// using icons
const ICONS = [
  'Bell',
  'ChevronLeft',
  'Home',
  'MessageCircle',
  'MessageCircleQuestion',
  'UserRound',
  // ...add more icons
] as const;

type IconName = (typeof ICONS)[number];

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  opacity?: number;
};
