import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import { color } from '@sinabro/design-token';

interface Props {
  children: React.ReactNode;
  type: 'sol' | 'heon';
}

const StyledLinearGradient = styled(LinearGradient)`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
`;

const Background = ({ children, type }: Props) => {
  const getGradientColors = () => {
    switch (type) {
      case 'sol':
        return [color.sinabroPink, color.sinabroCream];
      case 'heon':
        return [color.sinabroBlue, color.sinabroSkyBlue];
      default:
        return [color.sinabroPink, color.sinabroCream];
    }
  };

  return (
    <Container>
      <StyledLinearGradient colors={getGradientColors()}>
        {children}
      </StyledLinearGradient>
    </Container>
  );
};

export default Background;
