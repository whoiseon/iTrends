import { ACTIVE_TINT_COLOR, ACTIVE_TINT_COLOR_DARK } from '@itrends/ui';
import { useColorScheme } from 'react-native';
import tailwindColors from 'tailwindcss/colors';

export function useLayoutColors() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const colors = {
    bg: isDark ? tailwindColors.stone[900] : tailwindColors.white,
    bg_reverse: isDark ? tailwindColors.white : tailwindColors.stone[900],
    border: isDark ? tailwindColors.stone[700] : tailwindColors.stone[200],
    brand: isDark ? tailwindColors.blue[400] : tailwindColors.blue[500],
    tint: isDark ? ACTIVE_TINT_COLOR_DARK : ACTIVE_TINT_COLOR,
  };

  return colors;
}
