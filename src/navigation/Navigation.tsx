import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import IntroducePage from 'screens/Introduce/page';
import LoginPage from 'screens/Login/page';
import SelectCharacterPage from 'screens/SelectCharacter/page';
import StoryPage from 'screens/Story/page';
import SubmitInquiryPage from 'screens/Inquiry/SubmitInquiry';
import SettingPage from 'screens/Setting/page';
import FAQPage from 'screens/FAQ/page';
import AlarmPage from 'screens/Alarm/page';
import MainPage from 'screens/Main/page';
import DiaryPage from 'screens/Diary/page';
import MyPage from 'screens/MyPage/page';
import InquiryPage from 'screens/Inquiry/page';
import InquiryDetailPage from 'screens/Inquiry/Detail';
import MailBoxPage from 'screens/MailBox/page';
import WriteDiaryPage from 'screens/WriteDiary/page';
import SelectEmotionPage from 'screens/SelectEmotion/page';
import CheckDiaryPage from 'screens/CheckDiary/page';
import CheckLetterPage from 'screens/CheckLetter/page';
import TestPage from 'screens/test/page';

const Stack = createStackNavigator();

const Navigation = ({
  initialRoute,
}: {
  initialRoute: 'Navigation' | 'Test' | 'Main';
}) => {
  return (
    <GestureHandlerRootView>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen
          name="Introduce"
          component={IntroducePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Character"
          component={SelectCharacterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Story"
          component={StoryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MyPage" component={MyPage} options={{ headerShown: false }} />
        <Stack.Screen
          name="Inquiry"
          component={InquiryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InquiryDetail"
          component={InquiryDetailPage}
          initialParams={{ id: 1 }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SubmitInquiry"
          component={SubmitInquiryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FAQ" component={FAQPage} options={{ headerShown: false }} />
        <Stack.Screen
          name="Alarm"
          component={AlarmPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen
          name="Diary"
          component={DiaryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MailBox"
          component={MailBoxPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WriteDiary"
          component={WriteDiaryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectEmotion"
          component={SelectEmotionPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckDiary"
          component={CheckDiaryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckLetter"
          component={CheckLetterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Test" component={TestPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

export default Navigation;
