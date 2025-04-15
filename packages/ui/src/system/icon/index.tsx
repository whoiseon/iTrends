import * as LucideReactNative from 'lucide-react-native';

import { IconProps } from './shared';

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = LucideReactNative[name];
  return <IconComponent {...props} />;
};
