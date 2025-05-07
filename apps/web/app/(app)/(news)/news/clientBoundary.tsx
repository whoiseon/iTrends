'use client';

import { AppHeader, AppHeaderProps, Text } from '@itrends/ui';

const Title: AppHeaderProps['title'] = (styles) => (
  <Text {...styles}>News</Text>
);

export default function ClientBoundary() {
  return <AppHeader title={Title} />;
}
