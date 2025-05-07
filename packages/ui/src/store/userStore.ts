import { StateStorage } from 'zustand/middleware';

import { MMKVStorage } from './mmkv';

const storage: StateStorage = {
  getItem: (name) => {
    const value = MMKVStorage.getString(name);
    return value ?? null;
  },
  setItem: (name, value) => {
    return MMKVStorage.set(name, value);
  },
  removeItem: (name) => {
    return MMKVStorage.delete(name);
  },
};
