import { zodResolver } from '@hookform/resolvers/zod';
import { RefObject, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

import { Button, SafeAreaView, Text, View } from '../../../system';

import { LabelInput, SignUpSchema, signUpSchema } from './shared';

export function SignUpTemplate() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    },
  });

  const onPress = (data: SignUpSchema) => {
    console.log(data);
  };

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const onNext = (ref: RefObject<TextInput>) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-stone-900">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={100}
        enabled
      >
        <KeyboardAwareScrollView>
          <View className="flex-1 gap-y-4 p-5">
            <LabelInput
              label="닉네임"
              name="displayName"
              control={control}
              placeholder="닉네임을 입력해주세요"
              returnKeyType="next"
              error={errors.displayName?.message}
              autoFocus={true}
              onSubmitEditing={() => onNext(emailInputRef)}
            />
            <LabelInput
              label="이메일"
              name="email"
              control={control}
              placeholder="이메일을 입력해주세요"
              returnKeyType="next"
              keyboardType="email-address"
              error={errors.email?.message}
              inputRef={emailInputRef}
              onSubmitEditing={() => onNext(passwordInputRef)}
            />
            <LabelInput
              label="비밀번호"
              name="password"
              control={control}
              placeholder="비밀번호를 입력해주세요"
              returnKeyType="next"
              error={errors.password?.message}
              secureTextEntry={true}
              inputRef={passwordInputRef}
              onSubmitEditing={() => onNext(confirmPasswordInputRef)}
            />
            <LabelInput
              label="비밀번호 확인"
              name="confirmPassword"
              control={control}
              placeholder="비밀번호를 다시 입력해주세요"
              returnKeyType="done"
              error={errors.confirmPassword?.message}
              secureTextEntry={true}
              inputRef={confirmPasswordInputRef}
              onSubmitEditing={handleSubmit(onPress)}
            />
            <Button
              className="w-full bg-blue-500 dark:bg-blue-400 h-[46px] rounded-lg items-center justify-center mt-5"
              onPress={handleSubmit(onPress)}
            >
              <Text className="font-bold text-white dark:text-stone-900">
                가입하기
              </Text>
            </Button>
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
