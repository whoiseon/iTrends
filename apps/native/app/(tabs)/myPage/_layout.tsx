import { TopTabs } from '@bacons/expo-router-top-tabs';
import { Text, View } from '@itrends/ui';

export default function Layout() {
  return (
    <TopTabs>
      <TopTabs.Header>
        <View pointerEvents="none" style={{}}>
          <Text>My Page</Text>
        </View>
      </TopTabs.Header>
      <TopTabs.Screen name="index" options={{ title: 'My Post' }} />
      <TopTabs.Screen name="comments" options={{ title: 'My Comments' }} />
    </TopTabs>
  );
}
