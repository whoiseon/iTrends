import { ReactNode } from 'react';

import Provider from './provider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
