import { cssInterop } from 'nativewind';
import { Text as ReactNativeText } from 'react-native';

export const Text = cssInterop(ReactNativeText, {
  className: 'style',
});
