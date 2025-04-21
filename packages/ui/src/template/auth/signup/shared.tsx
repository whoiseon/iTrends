'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { usePostAuthSignup } from '@itrends/api';
import { RefObject, useRef, useState } from 'react';
import { Control, Controller, FieldErrors, useForm } from 'react-hook-form';
import { ReturnKeyType, TextInput, TextInputProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { z } from 'zod';

import { Button, Input, SafeAreaView, Text, View } from '../../../system';
import { cn } from '../../../utils';

const SIGN_UP_CONSTANTS = {
  SUBMIT_BUTTON_TEXT: '가입하기',
  SUBMIT_BUTTON_CLASS_NAME:
    'w-full bg-blue-500 dark:bg-blue-400 h-[46px] rounded-lg items-center justify-center mt-5',
  SUBMIT_BUTTON_TEXT_CLASS_NAME: 'font-bold text-white dark:text-stone-900',
  BACKGROUND_COLOR: 'bg-white dark:bg-stone-900',
  FORM_CONTAINER_CLASS_NAME: 'flex-1 gap-y-4 p-5',
} as const;

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

function LabelInput({
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
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoComplete="off"
            textContentType="oneTimeCode"
            autoCapitalize="none"
            placeholder={placeholder}
            returnKeyType={returnKeyType}
            onChangeText={(value) => onChange(value)}
            onBlur={onBlur}
            value={value || ''}
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

export function useSignUpForm() {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate } = usePostAuthSignup({
    mutation: {
      onSuccess: (data) => {
        if (data.statusCode === 200) {
          // signup success
          control._reset();
          return;
        }
      },
      onError: (error: any) => {
        const errorResponse = error.response.data;
        setServerError(errorResponse.message || 'Unknown error');
      },
    },
  });

  const onPress = (data: SignUpSchema) => {
    mutate({
      data: {
        email: data.email,
        password: data.password,
        displayName: data.displayName,
      },
    });
  };

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const onNext = (ref: RefObject<TextInput>) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return {
    handleSubmit,
    control,
    errors,
    onPress,
    emailInputRef,
    passwordInputRef,
    confirmPasswordInputRef,
    onNext,
    serverError,
  };
}

interface SignUpFormInputsProps {
  control: Control<SignUpSchema>;
  errors: FieldErrors<SignUpSchema>;
  onNext: (ref: RefObject<TextInput>) => void;
  emailInputRef: RefObject<TextInput>;
  passwordInputRef: RefObject<TextInput>;
  confirmPasswordInputRef: RefObject<TextInput>;
}
export function SignUpFormInputs({
  control,
  errors,
  onNext,
  emailInputRef,
  passwordInputRef,
  confirmPasswordInputRef,
}: SignUpFormInputsProps) {
  return (
    <>
      <LabelInput
        label="닉네임"
        name="displayName"
        control={control}
        placeholder="닉네임을 입력해주세요"
        returnKeyType="next"
        error={errors.displayName?.message}
        autoFocus={true}
        onSubmitEditing={() => onNext(emailInputRef)}
        testID="input-display-name"
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
        testID="input-email"
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
        testID="input-password"
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
        testID="input-confirm-password"
      />
    </>
  );
}

export function SignUpFormForNative() {
  const {
    handleSubmit,
    control,
    errors,
    onPress,
    emailInputRef,
    passwordInputRef,
    confirmPasswordInputRef,
    onNext,
    serverError,
  } = useSignUpForm();

  return (
    <SafeAreaView className={cn('flex-1', SIGN_UP_CONSTANTS.BACKGROUND_COLOR)}>
      <KeyboardAwareScrollView>
        <View className={SIGN_UP_CONSTANTS.FORM_CONTAINER_CLASS_NAME}>
          <SignUpFormInputs
            control={control}
            errors={errors}
            onNext={onNext}
            emailInputRef={emailInputRef}
            passwordInputRef={passwordInputRef}
            confirmPasswordInputRef={confirmPasswordInputRef}
          />
          {serverError && (
            <Text className="text-red-500 dark:text-red-400 text-base">
              {serverError}
            </Text>
          )}
          <Button
            className={SIGN_UP_CONSTANTS.SUBMIT_BUTTON_CLASS_NAME}
            onPress={handleSubmit(onPress)}
          >
            <Text className={SIGN_UP_CONSTANTS.SUBMIT_BUTTON_TEXT_CLASS_NAME}>
              {SIGN_UP_CONSTANTS.SUBMIT_BUTTON_TEXT}
            </Text>
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export function SignUpFormForWeb() {
  const {
    handleSubmit,
    control,
    errors,
    onPress,
    emailInputRef,
    passwordInputRef,
    confirmPasswordInputRef,
    onNext,
    serverError,
  } = useSignUpForm();

  return (
    <View className={cn('flex-1', SIGN_UP_CONSTANTS.BACKGROUND_COLOR)}>
      <View className={SIGN_UP_CONSTANTS.FORM_CONTAINER_CLASS_NAME}>
        <SignUpFormInputs
          control={control}
          errors={errors}
          onNext={onNext}
          emailInputRef={emailInputRef}
          passwordInputRef={passwordInputRef}
          confirmPasswordInputRef={confirmPasswordInputRef}
        />
        {serverError && (
          <Text className="text-red-500 dark:text-red-400 text-sm">
            {serverError}
          </Text>
        )}
      </View>
      <View className="p-5">
        <Button
          className={SIGN_UP_CONSTANTS.SUBMIT_BUTTON_CLASS_NAME}
          onPress={handleSubmit(onPress)}
          testID="signup-submit-button"
        >
          <Text className={SIGN_UP_CONSTANTS.SUBMIT_BUTTON_TEXT_CLASS_NAME}>
            {SIGN_UP_CONSTANTS.SUBMIT_BUTTON_TEXT}
          </Text>
        </Button>
      </View>
    </View>
  );
}
