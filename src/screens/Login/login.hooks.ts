import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

export const useCTAButton = () => {
  const navigation = useNavigation();

  const handleClickLoginButton = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          '784498296988-jvkntl96srooopu1i2viald3291prgso.apps.googleusercontent.com',
        iosClientId:
          '784498296988-h4ef35eq8et4ej56shumm3pae3cddcu2.apps.googleusercontent.com',
      });

      const hasPlayService = await GoogleSignin.hasPlayServices();
      if (hasPlayService) {
        const userInfo = await GoogleSignin.signIn();
        console.log('User Info:', JSON.stringify(userInfo));

        navigation.reset({
          index: 0,
          routes: [{ name: 'Test' as never }],
        });
      } else {
        console.log('Google Play Service is not available.');
      }
    } catch (e) {
      console.log('Error during Google Sign-In:', JSON.stringify(e));
    }
  };

  return { handleClickLoginButton };
};
