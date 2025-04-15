import { useColorScheme } from 'react-native';
import { useRouter } from 'solito/navigation';

import { Button } from '../../system';
import { Icon } from '../../system/icon';

import { AppHeaderProps, HeaderBackButtonProps } from './shared';

export function AppHeader(_: AppHeaderProps) {
  return null;
}

export function HeaderBackButton(_: HeaderBackButtonProps) {
  const { back } = useRouter();
  const colorScheme = useColorScheme();

  return (
    <Button onPress={back} className="-ml-1">
      <Icon
        name="ChevronLeft"
        size={24}
        color={colorScheme === 'dark' ? 'white' : 'black'}
      />
    </Button>
  );
}
