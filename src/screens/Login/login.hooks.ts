import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useLoginMutation } from 'services/auth/mutations';

export const useCTAButton = () => {
  const { loginMutate } = useLoginMutation();

  const handleClickLoginButton = async () => {
    GoogleSignin.configure({
      webClientId:
        '784498296988-jvkntl96srooopu1i2viald3291prgso.apps.googleusercontent.com',
      iosClientId:
        '784498296988-h4ef35eq8et4ej56shumm3pae3cddcu2.apps.googleusercontent.com',
    });

    const hasPlayService = await GoogleSignin.hasPlayServices();
    if (hasPlayService) {
      const userInfo = await GoogleSignin.signIn();
      loginMutate(userInfo.data?.idToken);
    }
  };

  return { handleClickLoginButton };
};
