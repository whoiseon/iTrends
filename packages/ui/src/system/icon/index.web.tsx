import * as LucideReact from 'lucide-react';

import { IconProps } from './shared';

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = LucideReact[name];
  return <IconComponent {...props} />;
};
