import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { IconWhiteArrow } from '@sinabro/icon';
import {
  LimitInput,
  NameInput,
  SignUpButton,
  SignUpPasswordInput,
} from 'components/onBoarding';
import {
  useJoinUserMutation,
  useRequestVerificationCodeMutation,
  useVerificationMutation,
} from 'services/auth/mutations';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

const SignInPage = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const { joinUserMutate } = useJoinUserMutation();
  const { requestVerificationCodeMutate } = useRequestVerificationCodeMutation(email);
  const { verificationMutate } = useVerificationMutation(setIsEmailVerified);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailVerificationRequest = () => {
    if (!email) {
      Alert.alert('이메일을 입력해주세요.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    console.log('Requesting verification code for email:', email);

    requestVerificationCodeMutate(undefined);
  };

  const handleVerifyCode = () => {
    if (!verificationCode) {
      Alert.alert('인증번호를 입력해주세요.');
      return;
    }

    verificationMutate({ email, code: verificationCode });
  };

  const handleSignUp = () => {
    if (!name || !email || !password || !passwordConfirmation) {
      Alert.alert('모든 필드를 입력해주세요.');
      return;
    }

    if (password !== passwordConfirmation) {
      Alert.alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!isEmailVerified) {
      Alert.alert('이메일 인증을 완료해주세요.');
      return;
    }

    const signUpData = { name, email, password };

    joinUserMutate(signUpData);
  };

  return (
    <StyledSignInPage>
      <StyledHeader>
        <IconContainer onPress={() => navigation.goBack()}>
          <IconWhiteArrow width={23} height={17} />
        </IconContainer>
        <TitleContainer>
          <CustomText fontType="H3" color={color.white100}>
            회원가입
          </CustomText>
        </TitleContainer>
      </StyledHeader>
      <NameInput value={name} onChangeText={setName} />
      <LimitInput
        placeholder="이메일을 입력해주세요"
        label="이메일"
        buttonText="인증 요청"
        value={email}
        onChangeText={setEmail}
        onPress={handleEmailVerificationRequest}
      />
      <LimitInput
        placeholder="인증번호 확인"
        label="인증 확인"
        buttonText="확인"
        value={verificationCode}
        onChangeText={setVerificationCode}
        onPress={handleVerifyCode}
      />
      <SignUpPasswordInput label="비밀번호" value={password} onChangeText={setPassword} />
      <SignUpPasswordInput
        label="비밀번호 재확인"
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
      />
      <SignUpButton onPress={handleSignUp}>회원가입</SignUpButton>
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
