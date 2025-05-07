import { useLayoutColors } from '@/hooks/useLayoutColors';
import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  const colors = useLayoutColors();

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.bg,
        },
        animation: 'slide_from_right',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'News',
        }}
      />
      <Stack.Screen
        name="post/[postId]"
        options={{
          title: 'Post',
        }}
      />
    </Stack>
  );
}
