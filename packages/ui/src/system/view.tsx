import { cssInterop } from 'nativewind';
import { View as ReactNativeView } from 'react-native';

export const View = cssInterop(ReactNativeView, {
  className: 'style',
});
