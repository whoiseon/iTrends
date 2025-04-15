'use client';

import { useRouter } from 'next/navigation';

import { HEADER_ICON_SIZE } from '../../config/constant';
import { Button, Text, View } from '../../system';
import { Icon } from '../../system/icon';
import { cn, isFunction } from '../../utils';

import { AppHeaderProps, HeaderBackButtonProps } from './shared';

const styles = {
  floatingCenterTitle: 'absolute left-0 right-0 text-center z-[-1]',
  headerButton: 'active:text-blue-600 active:opacity-80 text-blue-500',
};

export function AppHeader({ title, headerRight, headerLeft }: AppHeaderProps) {
  const titleStyle = cn(
    styles.floatingCenterTitle,
    'font-semibold text-lg text-stone-950 dark:text-stone-50',
  );
  return (
    <View
      testID="appHeader"
      className="flex flex-row sticky top-0 left-0 z-[1] right-0 bg-white dark:bg-stone-900 h-[56px] items-center px-4 gap-4 border-b-[1px] border-stone-200 dark:border-stone-700"
    >
      {headerLeft?.({
        className: styles.headerButton,
      })}
      {isFunction(title) ? (
        title({
          className: titleStyle,
        })
      ) : (
        <Text className={titleStyle}>{title}</Text>
      )}
      <View className="ml-auto">
        {headerRight?.({
          className: styles.headerButton,
        })}
      </View>
    </View>
  );
}

export function HeaderBackButton({ fallbackUrl }: HeaderBackButtonProps) {
  const { back, push } = useRouter();

  const handleGoBack = () => {
    // @ts-expect-error navigation type definition is nowhere to be found yet
    const canGoBack = window.navigation?.canGoBack ?? window.history.length > 2;

    if (canGoBack) {
      back();
    } else {
      push(fallbackUrl);
    }
  };

  return (
    <Button onPress={handleGoBack}>
      <Icon name="ChevronLeft" size={HEADER_ICON_SIZE} />
    </Button>
  );
}
