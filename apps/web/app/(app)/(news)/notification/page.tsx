import { getApiNotifications } from '@itrends/api';
import { NotificationTemplate } from '@itrends/ui';

import ClientBoundary from './clientBoundary';

export default async function Page() {
  const data = await getApiNotifications();

  return (
    <>
      <ClientBoundary />
      <NotificationTemplate data={data.payload} />
    </>
  );
}
