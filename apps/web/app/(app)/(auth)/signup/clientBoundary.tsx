'use client';

import { AppHeader, AppHeaderProps, HeaderBackButton, Text } from '@itrends/ui';

const Title: AppHeaderProps['title'] = (props) => (
  <Text {...props}>회원가입</Text>
);

const HeaderLeft: AppHeaderProps['headerLeft'] = () => (
  <HeaderBackButton fallbackUrl="/" />
);

export default function ClientBoundary() {
  return <AppHeader title={Title} headerLeft={HeaderLeft} />;
}
