import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HeaderPage from 'components/common/Header/Header';
import IntroducePage from 'screens/Introduce/page';
import LoginPage from 'screens/Login/page';
import NamePage from 'screens/NameInput/page';
import PsychologicalTest from 'screens/PsychologicalTest/page';
import SelectCharacterPage from 'screens/SelectCharacter/page';
import StoryPage from 'screens/Story/page';
import { color } from '@sinabro/design-token';
import MainPage from 'screens/Main/page';
import DiaryPage from 'screens/Diary/page';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen
            name="Introduce"
            component={IntroducePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Name"
            component={NamePage}
            options={{
              header: () => <HeaderPage backgroundColor={color.gray900} />,
            }}
          />
          <Stack.Screen
            name="Test"
            component={PsychologicalTest}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Character"
            component={SelectCharacterPage}
            options={{
              header: () => <HeaderPage backgroundColor={color.gray900} />,
            }}
          />
          <Stack.Screen
            name="Story"
            component={StoryPage}
            options={{
              header: () => <HeaderPage backgroundColor={color.gray900} />,
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Diary"
            component={DiaryPage}
            options={{ header: () => <HeaderPage backgroundColor={color.sinabroBlue} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigation;
