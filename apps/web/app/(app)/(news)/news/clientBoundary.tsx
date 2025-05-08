'use client';

import { AppHeader, AppHeaderProps, Icon, Link, Text } from '@itrends/ui';

const Title: AppHeaderProps['title'] = (styles) => (
  <Text {...styles}>News</Text>
);

const HeaderRight: AppHeaderProps['headerRight'] = () => (
  <Link href="/notification">
    <Icon name="Bell" size={20} />
  </Link>
);

export default function ClientBoundary() {
  return <AppHeader title={Title} headerRight={HeaderRight} />;
}
