import 'swagger-ui-react/swagger-ui.css';

import { Metadata } from 'next';

import { getApiDocs } from '../../../service/lib/swagger';

import SwaggerDocument from './swaggerDocument';

export default async function Page() {
  const spec = await getApiDocs();
  return (
    <section>
      <SwaggerDocument spec={spec} />
    </section>
  );
}

export const metadata: Metadata = {
  title: 'iTrends API',
};
