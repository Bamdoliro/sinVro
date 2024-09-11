import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { View } from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <View>
      <CustomText fontType="H1" color={color.gray900}>
        여기는 로그인 페이지
      </CustomText>
    </View>
  );
};

export default LoginScreen;
