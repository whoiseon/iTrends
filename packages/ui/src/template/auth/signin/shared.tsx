import { zodResolver } from '@hookform/resolvers/zod';
import { RefObject, useRef } from 'react';
import { Control, Controller, FieldErrors, useForm } from 'react-hook-form';
import { ReturnKeyType, TextInput, TextInputProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { z } from 'zod';

import { Button, Input, SafeAreaView, Text, View } from '../../../system';
import { cn } from '../../../utils';

const SIGN_IN_CONSTANTS = {
  SUBMIT_BUTTON_TEXT: '로그인',
  SUBMIT_BUTTON_CLASS_NAME:
    'w-full bg-blue-500 dark:bg-blue-400 h-[46px] rounded-lg items-center justify-center mt-5',
  SUBMIT_BUTTON_TEXT_CLASS_NAME: 'font-bold text-white dark:text-stone-900',
  BACKGROUND_COLOR: 'bg-white dark:bg-stone-900',
  FORM_CONTAINER_CLASS_NAME: 'flex-1 gap-y-4 p-5',
} as const;

export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: '이메일 형식이 올바르지 않습니다.' })
    .min(1),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
});

export type SignInSchema = z.infer<typeof signInSchema>;

interface LabelInputProps extends TextInputProps {
  label: string;
  name: 'email' | 'password';
  control: Control<SignInSchema>;
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

interface SignInFormInputsProps {
  control: Control<SignInSchema>;
  errors: FieldErrors<SignInSchema>;
  onNext: (ref: RefObject<TextInput>) => void;
  emailInputRef: RefObject<TextInput>;
  passwordInputRef: RefObject<TextInput>;
}

export function SignInFormInputs({
  control,
  errors,
  onNext,
  emailInputRef,
  passwordInputRef,
}: SignInFormInputsProps) {
  return (
    <>
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
        returnKeyType="done"
        error={errors.password?.message}
        inputRef={passwordInputRef}
        testID="input-password"
      />
    </>
  );
}

export function SignInFormForNative() {
  const {
    control,
    errors,
    onNext,
    emailInputRef,
    passwordInputRef,
    onPress,
    handleSubmit,
  } = useSignInForm();

  return (
    <SafeAreaView className={cn('flex-1', SIGN_IN_CONSTANTS.BACKGROUND_COLOR)}>
      <KeyboardAwareScrollView>
        <View className={SIGN_IN_CONSTANTS.FORM_CONTAINER_CLASS_NAME}>
          <SignInFormInputs
            control={control}
            errors={errors}
            onNext={onNext}
            emailInputRef={emailInputRef}
            passwordInputRef={passwordInputRef}
          />
          <Button
            className={SIGN_IN_CONSTANTS.SUBMIT_BUTTON_CLASS_NAME}
            onPress={handleSubmit(onPress)}
            testID="signin-submit-button"
          >
            <Text className={SIGN_IN_CONSTANTS.SUBMIT_BUTTON_TEXT_CLASS_NAME}>
              {SIGN_IN_CONSTANTS.SUBMIT_BUTTON_TEXT}
            </Text>
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export function SignInFormForWeb() {
  const {
    control,
    errors,
    onNext,
    emailInputRef,
    passwordInputRef,
    onPress,
    handleSubmit,
  } = useSignInForm();

  return (
    <View className={cn('flex-1', SIGN_IN_CONSTANTS.BACKGROUND_COLOR)}>
      <View className={SIGN_IN_CONSTANTS.FORM_CONTAINER_CLASS_NAME}>
        <SignInFormInputs
          control={control}
          errors={errors}
          onNext={onNext}
          emailInputRef={emailInputRef}
          passwordInputRef={passwordInputRef}
        />
      </View>
      <View className="p-5">
        <Button
          className={SIGN_IN_CONSTANTS.SUBMIT_BUTTON_CLASS_NAME}
          onPress={handleSubmit(onPress)}
          testID="signin-submit-button"
        >
          <Text className={SIGN_IN_CONSTANTS.SUBMIT_BUTTON_TEXT_CLASS_NAME}>
            {SIGN_IN_CONSTANTS.SUBMIT_BUTTON_TEXT}
          </Text>
        </Button>
      </View>
    </View>
  );
}

export function useSignInForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onPress = (data: SignInSchema) => {
    console.log(data);
  };

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

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
    onNext,
  };
}
