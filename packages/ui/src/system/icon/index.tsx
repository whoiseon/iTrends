import * as LucideReactNative from 'lucide-react-native';
import { cssInterop } from 'nativewind';

import { IconProps } from './shared';

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = cssInterop(LucideReactNative[name], {
    className: 'style',
  });

  return <IconComponent {...props} strokeWidth={1.5} />;
};
