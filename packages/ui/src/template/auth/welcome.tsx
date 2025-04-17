'use client';

import { Link, Text, View } from '../../system';
import { cn, platformStyle } from '../../utils';

const BUTTON_STYLE =
  'w-full flex items-center justify-center h-[46px] rounded-md';

const BUTTON_TEXT_STYLE = `font-bold text-white ${platformStyle({
  web: 'text-base',
  mobile: 'text-base',
})}`;

const TYPOGRAPHY_STYLE = `text-stone-500 dark:text-stone-300 ${platformStyle({
  web: 'text-base',
  mobile: 'text-base',
})}`;

export function AuthTemplate() {
  return (
    <View className="flex-1 flex-col justify-center items-center bg-white dark:bg-stone-900">
      <View className="flex-1 justify-center items-center gap-y-4">
        <View className="flex-col items-center gap-y-1">
          <Text className="text-[50px] font-bold">🗞️</Text>
          <Text className="text-2xl font-bold text-stone-700 dark:text-stone-100">
            iTrends
          </Text>
        </View>
        <View className="flex-col items-center gap-y-1">
          <Text className={TYPOGRAPHY_STYLE}>개발, 새로운 기술, 스타트업</Text>
          <Text className={TYPOGRAPHY_STYLE}>
            관련 트렌드를 한눈에 확인하세요!
          </Text>
        </View>
      </View>
      <View className="flex-col gap-y-1.5 px-4 w-full web:py-4 ios:py-12 android:py-4">
        <Link href="/signin">
          <View className={cn(BUTTON_STYLE, 'bg-blue-500 dark:bg-blue-400')}>
            <Text className={cn(BUTTON_TEXT_STYLE, 'dark:text-stone-900')}>
              이메일로 시작하기
            </Text>
          </View>
        </Link>
        <Link href="/signup">
          <View className={cn(BUTTON_STYLE, 'bg-stone-900 dark:bg-stone-50')}>
            <Text className={cn(BUTTON_TEXT_STYLE, 'dark:text-stone-900')}>
              간편 회원가입
            </Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
