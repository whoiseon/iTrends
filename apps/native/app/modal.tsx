import {
  getApiNotifications,
  GetApiNotifications200PayloadItem,
} from '@itrends/api';
import { NotificationTemplate } from '@itrends/ui';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ModalScreen() {
  const [data, setData] = useState<GetApiNotifications200PayloadItem[]>([]);

  useEffect(function getNotificationList() {
    (async () => {
      try {
        const list = await getApiNotifications();
        setData(list.payload);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'Notification' }} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <NotificationTemplate data={data} />
      </SafeAreaView>
    </>
  );
}
