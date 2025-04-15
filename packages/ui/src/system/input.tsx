import { cssInterop } from 'nativewind';
import { TextInput } from 'react-native';

export const Input = cssInterop(TextInput, {
  className: 'style',
});
