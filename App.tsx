import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from 'navigation/navigation';
import SplashScreen from 'react-native-splash-screen';
import { Animated } from 'react-native';
import Splash from 'screens/splash/page';
import { Storage } from 'apis/storage/storage';
import { TOKEN } from 'constants/common/contant';
import { useCharacterQuery } from 'services/character/quries';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRefreshTokenMutation } from 'services/auth/mutations';
import { RootStackParamList } from 'navigation/navigationType';

const queryClient = new QueryClient();

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList>('Introduce');
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const { data } = useCharacterQuery();
  const { refreshToeknMutate } = useRefreshTokenMutation();

  useEffect(() => {
    const initializeApp = async () => {
      const accessToken = await Storage.getItem(TOKEN.ACCESS);

      if (accessToken) {
        refreshToeknMutate(undefined, {
          onSuccess: () => {
            if (data) {
              setInitialRoute('Main');
            } else {
              setInitialRoute('Test');
            }
          },
          onError: () => {
            setInitialRoute('Introduce');
          },
        });
      } else {
        setInitialRoute('Introduce');
      }

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
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
