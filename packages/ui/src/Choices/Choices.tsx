import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Pressable, Animated } from 'react-native';
import { color } from '@sinabro/design-token';
import Row from '../Flex/Row';
import CustomText from '../Text/Text';
import { calculateHeight } from '@sinabro/util';

type Props = {
  onPress: () => void;
  children: string;
  isDisabled?: boolean;
};

const Choices = ({ onPress, children, isDisabled }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    if (isDisabled) return;

    setIsFocused(true);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setIsFocused(false);
        onPress();
      });
    });
  };

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', color.primary],
  });

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={{ backgroundColor }}>
        <StyledButton>
          <Row alignItems="center" justifyContent="center">
            <CustomText fontType="B5" color={isFocused ? color.gray900 : color.white100}>
              {children}
            </CustomText>
          </Row>
        </StyledButton>
      </Animated.View>
    </Pressable>
  );
};

const StyledButton = styled.View`
  height: ${calculateHeight(43)}px;
  width: 100%;
  border-color: ${color.primary};
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  justify-content: center;
`;

export default Choices;
