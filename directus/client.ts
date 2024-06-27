import { createDirectus, rest } from '@directus/sdk';

export const client = createDirectus('https://manage.redevs.org').with(rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  }));