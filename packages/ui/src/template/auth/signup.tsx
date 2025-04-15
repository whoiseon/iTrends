import { zodResolver } from '@hookform/resolvers/zod';
import { Control, Controller, useForm } from 'react-hook-form';
import { Platform, ReturnKeyType, TextInputProps } from 'react-native';
import { z } from 'zod';

import {
  Button,
  Input,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from '../../system';

export const signUpSchema = z
  .object({
    email: z
      .string()
      .email({ message: '이메일 형식이 올바르지 않습니다.' })
      .min(1),
    password: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
    confirmPassword: z
      .string()
      .min(1, { message: '비밀번호 확인을 입력해주세요.' }),
    displayName: z
      .string()
      .min(2, { message: '닉네임은 최소 2자 이상이어야 합니다.' })
      .regex(/^[가-힣a-zA-Z0-9]+$/, {
        message: '닉네임은 한글, 영어, 숫자만 사용 가능합니다.',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 bg-white dark:bg-stone-900">
        <View className="flex-1 gap-y-4 p-5 justify-end">
          <LabelInput
            label="닉네임"
            name="displayName"
            control={control}
            placeholder="닉네임을 입력해주세요"
            returnKeyType="next"
            error={errors.displayName?.message}
          />
          <LabelInput
            label="이메일"
            name="email"
            control={control}
            placeholder="이메일을 입력해주세요"
            returnKeyType="next"
            error={errors.email?.message}
          />
          <LabelInput
            label="비밀번호"
            name="password"
            control={control}
            placeholder="비밀번호를 입력해주세요"
            returnKeyType="next"
            error={errors.password?.message}
          />
          <LabelInput
            label="비밀번호 확인"
            name="confirmPassword"
            control={control}
            placeholder="비밀번호를 다시 입력해주세요"
            returnKeyType="done"
            error={errors.confirmPassword?.message}
          />
          <View className="mt-3">
            <Button
              className="w-full bg-blue-500 dark:bg-blue-400 h-[46px] rounded-lg items-center justify-center"
              onPress={handleSubmit(onPress)}
            >
              <Text className="font-bold text-white dark:text-stone-900">
                가입하기
              </Text>
            </Button>
          </View>
          <View className="flex-1" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

interface LabelInputProps extends TextInputProps {
  label: string;
  name: 'email' | 'password' | 'confirmPassword' | 'displayName';
  control: Control<SignUpSchema>;
  placeholder?: string;
  returnKeyType?: ReturnKeyType;
  error?: string;
}

export function LabelInput({
  label,
  name,
  control,
  returnKeyType,
  placeholder,
  error,
  ...props
}: LabelInputProps) {
  return (
    <View className="gap-2">
      <Text className="text-sm font-semibold text-stone-700 dark:text-stone-100">
        {label}
      </Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoCapitalize="none"
            keyboardType={name === 'email' ? 'email-address' : 'default'}
            secureTextEntry={name === 'password' || name === 'confirmPassword'}
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            onChangeText={(value) => onChange(value)}
            onBlur={onBlur}
            value={value}
            className="placeholder:text-stone-400 dark:placeholder:text-stone-600 h-[49px] text-stone-900 dark:text-stone-100 rounded-lg border border-stone-300 dark:border-stone-700 px-3 outline-none focus:border-blue-500 dark:focus:border-blue-400"
            {...props}
          />
        )}
      />
      {error && (
        <Text className="text-red-500 dark:text-red-400 text-sm">{error}</Text>
      )}
    </View>
  );
}
