'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

import { TAB_BAR_ICON_SIZE } from '../config/constant';
import {
  getAskTabIconOptions,
  getCommentsTabIconOptions,
  getMyPageTabIconOptions,
  getNewsTabIconOptions,
} from '../layout/tabBar/icons';
import { Link, Text, View } from '../system';
import { cn } from '../utils';

const TAB_LIST = [
  getNewsTabIconOptions(),
  getCommentsTabIconOptions(),
  getAskTabIconOptions(),
  getMyPageTabIconOptions(),
];

export function BottomNavigation() {
  const [firstSegment] = useSelectedLayoutSegments();

  return (
    <View className="fixed flex-row bottom-0 left-0 right-0 border-t-[1px] border-t-stone-300 dark:border-t-stone-800 bg-white dark:bg-stone-900 h-[56px] px-3 items-center justify-between">
      fwe \
      {TAB_LIST.map(({ tabBarIcon, title, href, activation }) => {
        const isActiveLink = activation?.(firstSegment ?? '');

        return (
          <Link href={href ?? ''} key={title}>
            <View className="items-center px-2.5 gap-y-0.5">
              {tabBarIcon({
                className: cn(
                  'text-stone-500',
                  isActiveLink && 'text-blue-500 dark:text-blue-400',
                ),
                size: TAB_BAR_ICON_SIZE,
              })}
              <Text
                className={cn(
                  'text-[10px] text-stone-500',
                  isActiveLink && 'text-blue-500 dark:text-blue-400',
                )}
              >
                {title}
              </Text>
            </View>
          </Link>
        );
      })}
    </View>
  );
}
