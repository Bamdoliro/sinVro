import React, { useCallback, useEffect } from 'react';
import { IconWhiteArrow } from '@sinabro/icon';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import { CustomText } from '@sinabro/ui';
import { color } from '@sinabro/design-token';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

interface Props {
  title?: string;
  option?: 'MAIL' | 'DEFAULT';
}

const Header = ({ title, option = 'DEFAULT' }: Props) => {
  const navigation = useNavigation();

  const handlePressBack = useCallback(() => {
    if (option === 'MAIL') {
      navigation.navigate('Main' as never);
      return true;
    } else if (navigation?.canGoBack()) {
      navigation.goBack();
      return true;
    }
    return false;
  }, [navigation, option]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlePressBack);
    };
  }, [handlePressBack]);

  return (
    <StyledHeader>
      <IconContainer onPress={handlePressBack}>
        <IconWhiteArrow width={23} height={17} />
      </IconContainer>
      <TitleContainer>
        <CustomText fontType="H3" color={color.white100}>
          {title}
        </CustomText>
      </TitleContainer>
    </StyledHeader>
  );
};

export default Header;

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
