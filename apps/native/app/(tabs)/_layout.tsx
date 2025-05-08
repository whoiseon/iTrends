import {
  cn,
  getAskTabIconOptions,
  getCommentsTabIconOptions,
  getMyPageTabIconOptions,
  getNewsTabIconOptions,
  Icon,
  TAB_BAR_ICON_SIZE,
} from '@itrends/ui';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useLayoutColors } from '@/hooks/useLayoutColors';

export default function TabLayout() {
  const colors = useLayoutColors();

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: colors.bg,
        },
        tabBarActiveTintColor: colors.tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: colors.bg,
          borderTopColor: colors.border,
        },
        headerStyle: {
          backgroundColor: colors.bg,
        },
      }}
    >
      <Tabs.Screen
        name="news"
        options={{
          title: getNewsTabIconOptions().title,
          tabBarIcon: ({ color, focused }) =>
            getNewsTabIconOptions().tabBarIcon({
              size: TAB_BAR_ICON_SIZE,
              color: focused ? colors.tint : color,
            }),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Icon
                    name="Bell"
                    size={20}
                    color={colors.bg_reverse}
                    className={cn('mr-4', pressed && 'opacity-70')}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="comments"
        options={{
          title: getCommentsTabIconOptions().title,
          tabBarIcon: ({ color, focused }) =>
            getCommentsTabIconOptions().tabBarIcon({
              size: TAB_BAR_ICON_SIZE,
              color: focused ? colors.tint : color,
            }),
        }}
      />
      <Tabs.Screen
        name="ask"
        options={{
          title: getAskTabIconOptions().title,
          tabBarIcon: ({ color, focused }) =>
            getAskTabIconOptions().tabBarIcon({
              size: TAB_BAR_ICON_SIZE,
              color: focused ? colors.tint : color,
            }),
        }}
      />
      <Tabs.Screen
        name="myPage"
        options={{
          title: getMyPageTabIconOptions().title,
          tabBarIcon: ({ color, focused }) =>
            getMyPageTabIconOptions().tabBarIcon({
              size: TAB_BAR_ICON_SIZE,
              color: focused ? colors.tint : color,
            }),
        }}
      />
    </Tabs>
  );
}
