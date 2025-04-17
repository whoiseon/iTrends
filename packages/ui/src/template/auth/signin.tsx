'use client';

import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';

import { SafeAreaView, Text, View } from '../../system';

export function SignInTemplate() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 gap-y-4 p-5">
          <Text>Hello</Text>
        </View>
        <TextInput placeholder="text here..." />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
