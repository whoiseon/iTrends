import { cssInterop } from 'nativewind';
import {
  KeyboardAvoidingView as ReactNativeKeyboardAvoidingView,
  SafeAreaView as ReactNativeSafeAreaView,
  ScrollView as ReactNativeScrollView,
  View as ReactNativeView,
} from 'react-native';

export const View = cssInterop(ReactNativeView, {
  className: 'style',
});

export const ScrollView = cssInterop(ReactNativeScrollView, {
  className: 'style',
});

export const KeyboardAvoidingView = cssInterop(
  ReactNativeKeyboardAvoidingView,
  {
    className: 'style',
  },
);

export const SafeAreaView = cssInterop(ReactNativeSafeAreaView, {
  className: 'style',
});
