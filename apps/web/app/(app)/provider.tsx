'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

export default function Provider({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    // @ts-ignore -- Need below for Solito: https://solito.dev/app-directory/overview#appstyles-providertsx
    const sheet = StyleSheet.getSheet();
    return (
      //
      <style
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for Solito Router set up: https://solito.dev/app-directory/overview#appstyles-providertsx
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    );
  });

  return children;
}
