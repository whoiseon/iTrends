'use client';

import { AppHeader, AppHeaderProps, Text } from '@itrends/ui';

const Title: AppHeaderProps['title'] = (styles) => (
  <Text {...styles}>My Page</Text>
);

export default function ClientBoundary() {
  return <AppHeader title={Title} />;
}
