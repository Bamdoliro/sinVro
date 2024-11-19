import { Image } from 'react-native';
import { Animated } from 'react-native';
import React from 'react';
import { Column, CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { calculateHeight, flex } from '@sinabro/util';
import { color } from '@sinabro/design-token';

const Splash = () => {
  return (
    <StyledSplashPage>
      <Animated.View>
        <Column alignItems="center" gap={calculateHeight(254)}>
          <Image
            source={require('../../../public/splash.gif')}
            style={{ width: 203, height: 106 }}
          />
          <CustomText fontType="splash" color="#000000">
            시나브로
          </CustomText>
        </Column>
      </Animated.View>
    </StyledSplashPage>
  );
};

export default Splash;

const StyledSplashPage = styled.View`
  ${flex({ alignItems: 'center' })}
  padding-top: ${calculateHeight(281)}px;
  background-color: ${color.paleYellow};
  width: 100%;
  height: 100%;
`;
