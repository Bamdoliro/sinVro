import React, { useState, useEffect, useRef } from 'react';
import Navigation from 'navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { Animated } from 'react-native';
import Splash from 'screens/splash/page';
import QueryClientProvider from 'services/QueryClienProvider';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
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
  }, [fadeAnim]);

  return (
    <>
      {showSplash ? (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Splash />
        </Animated.View>
      ) : (
        <QueryClientProvider>
          <Navigation />
        </QueryClientProvider>
      )}
    </>
  );
}

export default App;
