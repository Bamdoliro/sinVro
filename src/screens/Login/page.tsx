import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import React, { useState } from 'react';
import { Column, CustomText } from '@sinabro/ui';
import { flex } from '@sinabro/util';
import {
  EmailInput,
  LoginButton,
  PasswordInput,
  SignInButton,
} from 'components/onBoarding';
import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from 'services/auth/mutations';
import { Alert } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { loginMutate } = useLoginMutation();
  const data = { email, password };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('모든 필드를 입력해주세요.');
      return;
    }

    loginMutate(data);
  };

  return (
    <StyledLoginPage>
      <CustomText fontType="B6" color={color.white100}>
        당신을 위한 작은 쉼터
      </CustomText>
      <CustomText fontType="H1" color={color.white100}>
        시나브로
      </CustomText>
      <Container>
        <Column gap={8}>
          <EmailInput value={email} onChangeText={setEmail} />
          <PasswordInput value={password} onChangeText={setPassword} />
        </Column>
      </Container>
      <LoginButton onPress={handleLogin} />
      <SignInButton
        onPress={() => {
          navigation.navigate('signup' as never);
        }}
      />
    </StyledLoginPage>
  );
};

export default LoginPage;

const StyledLoginPage = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  background-color: ${color.gray900};
  padding-top: 94px;
`;

const Container = styled.View`
  padding-top: 40px;
`;
