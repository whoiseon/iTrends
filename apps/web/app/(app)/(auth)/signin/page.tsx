import { SignInTemplate } from '@itrends/ui';

import ClientBoundary from './clientBoundary';

export default function Page() {
  return (
    <>
      <ClientBoundary />
      <SignInTemplate />
    </>
  );
}
