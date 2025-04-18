'use client';

import { AppHeader, AppHeaderProps, HeaderBackButton, Text } from '@itrends/ui';

const Title: AppHeaderProps['title'] = (props) => (
  <Text {...props}>로그인</Text>
);

const HeaderLeft: AppHeaderProps['headerLeft'] = () => (
  <HeaderBackButton fallbackUrl="/" />
);

export default function ClientBoundary() {
  return <AppHeader title={Title} headerLeft={HeaderLeft} />;
}
