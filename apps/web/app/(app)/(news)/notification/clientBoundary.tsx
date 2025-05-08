'use client';

import { AppHeader, AppHeaderProps, HeaderBackButton, Text } from '@itrends/ui';

const Title: AppHeaderProps['title'] = (styles) => (
  <Text {...styles}>Notification</Text>
);

const HeaderLeft: AppHeaderProps['headerLeft'] = () => (
  <HeaderBackButton fallbackUrl="/" />
);

export default function ClientBoundary() {
  return <AppHeader title={Title} headerLeft={HeaderLeft} />;
}
