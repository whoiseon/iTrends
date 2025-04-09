import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from '@tamagui/core';

export const tamaguiConfig = createTamagui(defaultConfig);

export type TamaguiConfig = typeof tamaguiConfig;
