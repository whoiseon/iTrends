'use client';

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

  return <>{children}</>;
}
