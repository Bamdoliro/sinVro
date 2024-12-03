import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { IconWhiteArrow } from '@sinabro/icon';
import CheckBox from 'react-native-check-box';
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
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const { joinUserMutate } = useJoinUserMutation();
  const { requestVerificationCodeMutate } = useRequestVerificationCodeMutation(email);
  const { verificationMutate } = useVerificationMutation(setIsEmailVerified);

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

    if (!isTermsChecked) {
      Alert.alert('약관에 동의해주세요.');
      return;
    }

    const signUpData = { name, email, password };

    joinUserMutate(signUpData);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
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
        <StyledScrollView>
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
          <SignUpPasswordInput
            label="비밀번호"
            value={password}
            onChangeText={setPassword}
          />
          <SignUpPasswordInput
            label="비밀번호 재확인"
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
          />
          <CheckboxContainer>
            <CheckBox
              isChecked={isTermsChecked}
              onClick={() => setIsTermsChecked(!isTermsChecked)}
              checkBoxColor={isTermsChecked ? color.primary : color.white100}
            />
            <TouchableOpacity onPress={() => navigation.navigate('privacy' as never)}>
              <CustomText
                fontType="B5"
                color={color.white100}
                style={{ marginLeft: 8, marginRight: 8 }}
              >
                개인정보 수집 이용동의
              </CustomText>
            </TouchableOpacity>
            <CustomText fontType="B5" color={color.primary}>
              [필수]
            </CustomText>
          </CheckboxContainer>

          <SignUpButton onPress={handleSignUp}>회원가입</SignUpButton>
        </StyledScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignInPage;

const Container = styled.View`
  flex: 1;
  background-color: ${color.gray900};
`;

const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: flex({ alignItems: 'center' }),
})`
  padding: ${calculateHeight(20)}px ${calculateWidth(16)}px;
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

const CheckboxContainer = styled.View`
  width: 100%;
  margin: ${calculateHeight(20)}px 0;
  flex-direction: row;
  align-items: center;
`;
