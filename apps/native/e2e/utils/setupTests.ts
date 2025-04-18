import { beforeEach } from '@jest/globals';
import { openApp } from './openApp';

beforeEach(async () => {
  await openApp();
});
