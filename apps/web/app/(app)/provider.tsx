'use client';

import { queryClient } from '@itrends/ui';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useServerInsertedHTML } from 'next/navigation';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

export default function Provider({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    // @ts-ignore
    const sheet = StyleSheet.getSheet();
    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    );
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
