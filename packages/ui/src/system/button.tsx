'use client';

import { cssInterop } from 'nativewind';
import { Pressable as ReactNativePressable } from 'react-native';

export const Button = cssInterop(ReactNativePressable, {
  className: 'style',
});
