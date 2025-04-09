import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={{
          animation: 'slide_from_right',
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
    </>
  );
}
