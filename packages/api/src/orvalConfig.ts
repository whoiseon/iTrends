import { defineConfig } from 'orval';

// TODO: orval config
export default defineConfig({
  petstore: {
    input: {
      target: './__generated__/openapi.json',
    },
    output: {
      mode: 'single',
      override: {
        mutator: {
          name: 'customInstance',
          path: './mutator.ts',
        },
        useDates: true,
        query: {
          options: {
            refetchOnWindowFocus: false,
          },
        },
      },
      client: 'react-query',
      target: './__generated__/api.generated.ts',
    },
  },
});
