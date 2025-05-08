import { getApiNotifications } from '@itrends/api';

import ClientBoundary from './clientBoundary';

export default async function Page() {
  const data = await getApiNotifications();

  return <ClientBoundary data={data} />;
}
