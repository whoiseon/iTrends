'use client';

import { GetApiNotifications200PayloadItem } from '@itrends/api/src';
import { ComponentProps, useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';

import { Windowing } from '../block/windowing';
import { ESTIMATED_ITEM_SIZE } from '../config/constant';
import { Text, View } from '../system';
import { cn } from '../utils';

export function FixedItem({
  item,
  isLastItem,
  isWeb,
  ...rest
}: { item: GetApiNotifications200PayloadItem } & {
  isLastItem: boolean;
  isWeb?: boolean;
} & ComponentProps<typeof View>) {
  return (
    <View
      className={cn(
        `flex-row items-center p-4 border-b-[1px] border-stone-300 dark:border-stone-800 gap-4`,
        isLastItem && 'border-none',
        isWeb && 'top-0 left-0 absolute w-full',
      )}
      {...rest}
    >
      <View className="bg-blue-500 dark:bg-blue-400 px-1.5 py-0.5 rounded-md text-white dark:text-stone-900">
        <Text className="text-xs font-bold">공지</Text>
      </View>
      <View className="flex-1 gap-y-1">
        <Text className="text-sm font-medium text-ellipsis text-stone-900 dark:text-stone-100">
          {item.title}
        </Text>
        <Text className="text-xs text-stone-500 dark:text-stone-400">
          {item.date}
        </Text>
      </View>
    </View>
  );
}

interface NotificationTemplateProps {
  data: GetApiNotifications200PayloadItem[];
}

export function NotificationTemplate({ data = [] }: NotificationTemplateProps) {
  const count = data.length;

  return (
    <Windowing
      data={data}
      native={{
        estimatedItemSize: ESTIMATED_ITEM_SIZE,
        renderItem: ({ item, index }) => (
          <FixedItem item={item} isLastItem={index === count - 1} />
        ),
        contentContainerStyle: {
          backgroundColor: colors.stone['950'],
          paddingBottom: 100,
        },
      }}
      web={{
        count,
        estimateSize: () => ESTIMATED_ITEM_SIZE,
        renderItem: ({ item, size, start, isLastItem, index }) => (
          <FixedItem
            item={item}
            isLastItem={isLastItem}
            style={{
              height: size,
              position: 'absolute',
              transform: `translateY(${start}px)`,
            }}
            isWeb={true}
          >
            {index}
          </FixedItem>
        ),
      }}
    />
  );
}
