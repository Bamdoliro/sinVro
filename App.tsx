import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from 'navigation/navigation';
import SplashScreen from 'react-native-splash-screen';
import Splash from 'screens/splash/page';
import { Storage } from 'apis/storage/storage';
import { TOKEN } from 'constants/common/contant';
import { useCharacterQuery } from 'services/character/quries';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRefreshTokenMutation } from 'services/auth/mutations';
import { RootStackParamList } from 'navigation/navigationType';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

const queryClient = new QueryClient();

const AppContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [initialRoute] = useState<keyof RootStackParamList>('Introduce');
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const { data } = useCharacterQuery();
  const { refreshToeknMutate } = useRefreshTokenMutation();

  useEffect(() => {
    const initializeApp = async () => {
      refreshToeknMutate();
      await setupFCM();
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }).start(() => {
          setShowSplash(false);
          SplashScreen.hide();
        });
      }, 2700);

      return () => clearTimeout(timer);
    };

    initializeApp();
  }, [fadeAnim, data, refreshToeknMutate]);

  return (
    <>
      {showSplash ? (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Splash />
        </Animated.View>
      ) : (
        <Navigation initialRoute={initialRoute} />
      )}
    </>
  );
};

const setupFCM = async () => {
  const authStatus = await messaging().requestPermission();
  const isAuthorized =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (isAuthorized) {
    try {
      const fcmToken = await messaging().getToken();

      await Storage.setItem(TOKEN.FCM, fcmToken);
    } catch (error) {}
  }

  messaging().onMessage(async (remoteMessage: any) => {
    await notifee.displayNotification({
      title: remoteMessage.notification?.title || '알림',
      body: remoteMessage.notification?.body || '새로운 알림이 있습니다.',
    });
  });
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
