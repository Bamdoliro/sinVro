import React from 'react';
import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import { useLogoutAction } from './logout.hooks';

const LogOutButton = () => {
  const { handleLogout } = useLogoutAction();

  return (
    <StyledLogOutButton onPress={handleLogout}>
      <CustomText fontType="B4" color={color.white100}>
        로그아웃
      </CustomText>
    </StyledLogOutButton>
  );
};

export default LogOutButton;

const StyledLogOutButton = styled.TouchableOpacity`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(336)}px;
  height: ${calculateHeight(56)}px;
  border: 1px solid ${color.glassStroke};
  background-color: ${color.glassWhite};
  border-radius: 6px;
`;
