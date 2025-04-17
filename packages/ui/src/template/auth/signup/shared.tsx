import { RefObject } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ReturnKeyType, TextInput, TextInputProps } from 'react-native';
import { z } from 'zod';

import { Input, Text, View } from '../../../system';

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

interface LabelInputProps extends TextInputProps {
  label: string;
  name: 'email' | 'password' | 'confirmPassword' | 'displayName';
  control: Control<SignUpSchema>;
  placeholder?: string;
  returnKeyType?: ReturnKeyType;
  error?: string;
  inputRef?: RefObject<TextInput>;
}

export function LabelInput({
  label,
  name,
  control,
  returnKeyType,
  placeholder,
  error,
  inputRef,
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
            autoComplete="off"
            textContentType="oneTimeCode"
            autoCapitalize="none"
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            onChangeText={(value) => onChange(value)}
            onBlur={onBlur}
            value={value}
            ref={inputRef}
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
