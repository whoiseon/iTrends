import { Platform } from 'react-native';
import { MMKV } from 'react-native-mmkv';

import { MMKV_ENCRYPTION_KEY, STORE_KEY } from '../config/constant';

export const MMKVStorage = new MMKV({
  id: STORE_KEY,
  ...Platform.select({
    native: { encryptionKey: MMKV_ENCRYPTION_KEY },
  }),
});
