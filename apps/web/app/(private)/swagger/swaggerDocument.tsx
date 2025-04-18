'use client';

import React from 'react';
import SwaggerUI from 'swagger-ui-react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spec: Record<string, any>;
};

export default function SwaggerDocument({ spec }: Props) {
  // todo fix swagger-ui-react type error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SwaggerComponent = SwaggerUI as unknown as React.ComponentType<any>;
  return <SwaggerComponent spec={spec} />;
}
