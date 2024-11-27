import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import React, { useState } from 'react';
import { CustomText } from '@sinabro/ui';
import { IconWhiteArrow } from '@sinabro/icon';
import { useNavigation } from '@react-navigation/native';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import {
  LimitInput,
  NameInput,
  SignInEmailInput,
  SignUpButton,
  SignUpPasswordInput,
} from 'components/onBoarding';

const SignInPage = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <StyledSignInPage>
      <StyledHeader>
        <IconContainer
          onPress={() => {
            navigation.goBack();
          }}
        >
          <IconWhiteArrow width={23} height={17} />
        </IconContainer>
        <TitleContainer>
          <CustomText fontType="H3" color={color.white100}>
            회원가입
          </CustomText>
        </TitleContainer>
      </StyledHeader>
      <NameInput value={name} onChange={setName} />
      <SignInEmailInput value={email} onChange={setEmail} />
      <LimitInput value={number} onPress={() => {}} />
      <SignUpPasswordInput label="비밀번호" value={password} onChange={setPassword} />
      <SignUpPasswordInput
        label="비밀번호 재확인"
        value={passwordConfirmation}
        onChange={setPasswordConfirmation}
      />

      <SignUpButton onPress={() => {}} />
    </StyledSignInPage>
  );
};

export default SignInPage;

const StyledSignInPage = styled.View`
  ${flex({ alignItems: 'center' })}
  background-color: ${color.gray900};
  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.View`
  position: absolute;
  top: ${calculateHeight(67)}px;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 10;
`;

const IconContainer = styled.TouchableOpacity`
  padding: 9px;
  position: absolute;
  left: ${calculateWidth(20)}px;
  z-index: 1;
`;

const TitleContainer = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  flex: 1;
`;
