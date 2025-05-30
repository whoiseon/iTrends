import { Alert, Platform } from 'react-native';

export function systemAlert(message: string) {
  if (Platform.OS === 'web') {
    alert(message);
  } else {
    Alert.alert(message);
  }
}
