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

const LoginButton = ({ onPress, isLoading = false }: Props) => {
  return (
    <StyledLoginButton onPress={!isLoading ? onPress : undefined} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color={color.white100} />
      ) : (
        <CustomText fontType="B4" color={color.white100}>
          로그인
        </CustomText>
      )}
    </StyledLoginButton>
  );
};

export default LoginButton;

const StyledLoginButton = styled.TouchableOpacity`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  background-color: ${color.primary};
  margin-top: 32px;
  width: ${calculateWidth(335)}px;
  height: ${calculateHeight(56)}px;
  border-radius: 6px;
  opacity: 1;
  padding: 16px 120px;
`;
