import { useCallback, useEffect } from 'react';
import { BackHandler, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { calculateHeight, flex } from '@sinabro/util';
import { IconWhiteArrow } from '@sinabro/icon';
import { useNavigation } from '@react-navigation/native';
import { CustomText } from '@sinabro/ui';
import { color } from '@sinabro/design-token';
import React from 'react';

interface Props {
  title?: string;
  active?: boolean;
  backgroundColor: string;
}

const Header = ({ title, active, backgroundColor }: Props) => {
  const navigation = useNavigation();

  const handlePressBack = useCallback(() => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
      return true;
    }
    return false;
  }, [navigation]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlePressBack);
    };
  }, []);

  return (
    <StyledHeader $active={active} $backgroundColor={backgroundColor}>
      <TouchableOpacity onPress={handlePressBack}>
        <IconContainer>
          <IconWhiteArrow width={23} height={17} />
        </IconContainer>
      </TouchableOpacity>
      <TitleContainer>
        <CustomText color={color.white100} fontType="H3">
          {title}
        </CustomText>
      </TitleContainer>
    </StyledHeader>
  );
};

export default memo(Header);

const StyledHeader = styled.View<{ $active?: boolean; $backgroundColor: string }>`
  ${flex({ flexDirection: 'row' })}
  background-color: ${(props: any) => props.$backgroundColor};
  padding-top: ${calculateHeight(28)}px;
  align-items: center;
`;

const IconContainer = styled.View`
  padding-top: ${calculateHeight(40)}px;
  padding-left: ${calculateHeight(25)}px;
`;

const TitleContainer = styled.View`
  flex: 1;
  ${flex({
    justifyContent: 'center',
    alignItems: 'center',
  })}
  padding-top: ${calculateHeight(32)}px;
  margin-right: ${calculateHeight(44)}px;
`;
