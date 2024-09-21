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
import MyPage from 'screens/MyPage/page';
import InquiryPage from 'screens/Inquiry/page';
import InquiryDetailPage from 'screens/Inquiry/Detail';
import SubmitInquiryPage from 'screens/Inquiry/SubmitInquiry';
import SettingPage from 'screens/Setting/page';
import FAQPage from 'screens/FAQ/page';
import AlarmPage from 'screens/Alarm/page';

import { color } from '@sinabro/design-token';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
              headerStyle: {
                backgroundColor: color.gray900,
              },
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
            name="MyPage"
            component={MyPage}
            options={{
              header: () => <HeaderPage backgroundColor={color.gray900} />,
            }}
          />
          <Stack.Screen
            name="Inquiry"
            component={InquiryPage}
            options={{
              header: () => (
                <HeaderPage backgroundColor={color.gray900} title="문의 내역" />
              ),
            }}
          />
          <Stack.Screen
            name="InquiryDetail"
            component={InquiryDetailPage}
            options={{
              header: () => <HeaderPage backgroundColor={color.gray900} title="문의" />,
            }}
          />
          <Stack.Screen
            name="SubmitInquiry"
            component={SubmitInquiryPage}
            options={{
              header: () => <HeaderPage backgroundColor={color.gray900} title="문의" />,
            }}
          />
          <Stack.Screen
            name="Setting"
            component={SettingPage}
            options={{
              header: () => <HeaderPage backgroundColor={color.gray900} title="설정" />,
            }}
          />
          <Stack.Screen
            name="FAQ"
            component={FAQPage}
            options={{
              header: () => (
                <HeaderPage backgroundColor={color.gray900} title="자주 묻는 질문" />
              ),
            }}
          />
          <Stack.Screen
            name="Alarm"
            component={AlarmPage}
            options={{
              header: () => <HeaderPage backgroundColor={color.gray900} title="알림" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigation;
