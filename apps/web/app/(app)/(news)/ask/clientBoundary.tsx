'use client';

import { AppHeader, AppHeaderProps, Text } from '@itrends/ui';

const Title: AppHeaderProps['title'] = (styles) => <Text {...styles}>Ask</Text>;

export default function ClientBoundary() {
  return <AppHeader title={Title} />;
}
