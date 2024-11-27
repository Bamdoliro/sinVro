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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

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
          <EmailInput value={email} onChange={setEmail} />
          <PasswordInput value={password} onChange={setPassword} />
        </Column>
      </Container>
      <LoginButton onPress={() => {}} />
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
