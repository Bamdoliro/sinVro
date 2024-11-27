import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { IntroducePage, LoginPage, SignUpPage } from 'pages';
import React from 'react';
import { RootStackList } from './navigation.type';

const Stack = createStackNavigator<RootStackList>();

const Navigation = ({ initialRoute }: { initialRoute: keyof RootStackList }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen
          name="introduce"
          component={IntroducePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUpPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
