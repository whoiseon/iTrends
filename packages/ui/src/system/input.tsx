import { cssInterop } from 'nativewind';
import { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

const ForwardedTextInput = forwardRef<TextInput, TextInputProps>(
  (props, ref) => <TextInput {...props} ref={ref} />,
);

ForwardedTextInput.displayName = 'ForwardedTextInput';

export const Input = cssInterop(ForwardedTextInput, {
  className: 'style',
});

Input.displayName = 'Input';
