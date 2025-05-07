import { useScrollProps } from '@bacons/expo-router-top-tabs';
import { Text } from '@itrends/ui';
import { Animated } from 'react-native';

export default function Comments() {
  const scroll = useScrollProps();

  return (
    <Animated.ScrollView {...scroll}>
      <Text>Comments</Text>
    </Animated.ScrollView>
  );
}
