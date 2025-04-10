import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={viewStyle.container}>
      <Link href="/(tabs)/news">
        <Text>News</Text>
      </Link>
    </View>
  );
}

const viewStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
