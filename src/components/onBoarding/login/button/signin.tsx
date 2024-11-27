import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import React from 'react';
import { CustomText } from '@sinabro/ui';
import { ActivityIndicator } from 'react-native';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

interface Props {
  onPress: () => void;
  isLoading?: boolean;
}

const SignInButton = ({ onPress, isLoading = false }: Props) => {
  return (
    <StyledSignInButton onPress={!isLoading ? onPress : undefined} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color={color.white100} />
      ) : (
        <CustomText fontType="B5" color={color.white100}>
          회원가입
        </CustomText>
      )}
    </StyledSignInButton>
  );
};

export default SignInButton;

const StyledSignInButton = styled.TouchableOpacity`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  margin-top: 12px;
  width: ${calculateWidth(335)}px;
  height: ${calculateHeight(56)}px;
  border-radius: 6px;
  opacity: 1;
`;
