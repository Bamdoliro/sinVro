import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Animated, Easing } from 'react-native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

type Props = {
  onToggle: () => void;
  isOn: boolean;
};

const Toggle = ({ onToggle, isOn }: Props) => {
  const [animatedValue] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 26],
  });

  const colorValue = isOn ? color.primary : color.glassDark;

  return (
    <ToggleContainer onPress={onToggle} color={colorValue}>
      <ToggleWheel
        style={{
          transform: [{ translateX }],
        }}
      />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.TouchableOpacity<{ color: string }>`
  ${flex({ justifyContent: 'center' })}
  height: ${calculateHeight(24)}px;
  width: ${calculateWidth(48)}px;
  border: 1px solid ${color.glassStroke};
  border-radius: 99px;
  background-color: ${(props: any) => props.color};
`;

const ToggleWheel = styled(Animated.View)`
  height: ${calculateHeight(16)}px;
  width: ${calculateWidth(17)}px;
  background-color: ${color.white100};
  border-radius: 99px;
`;
