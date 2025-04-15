import { ComponentProps, ReactNode } from 'react';

import { Text } from '../../system';

export interface AppHeaderProps {
  title?: string | { (props: ComponentProps<typeof Text>): ReactNode };
  headerLeft?: (props: { className?: string }) => ReactNode;
  headerRight?: (props: { className?: string }) => ReactNode;
}

export interface HeaderBackButtonProps {
  fallbackUrl: string;
}
