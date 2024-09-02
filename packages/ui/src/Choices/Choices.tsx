import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions, Pressable } from 'react-native';
import { color, font } from '@sinabro/design-token';
import Row from '../Flex/Row';
import CustomText from '../Text/Text';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const iPhone13MiniWidth = 375;
const iPhone13MiniHeight = 780;

const calculateWidth = (baseWidth: number) =>
  (screenWidth / iPhone13MiniWidth) * baseWidth;
const calculateHeight = (baseHeight: number) =>
  (screenHeight / iPhone13MiniHeight) * baseHeight;

type Props = {
  onPress: () => void;
  children: string;
};

const Input = ({ onPress, children }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handlePress = () => {
    setIsFocused(!isFocused);
    onPress();
  };

  return (
    <StyledButton onPress={handlePress} isFocused={isFocused}>
      <Row alignItems="center" justifyContent="center">
        <CustomText fontType="B3" color={isFocused ? color.gray900 : color.white100}>
          {children}
        </CustomText>
      </Row>
    </StyledButton>
  );
};

const StyledButton = styled(Pressable)<{ isFocused: boolean }>`
  height: ${calculateHeight(200)}px;
  width: ${calculateWidth(160)}px;

  border-color: ${color.primary};
  border-width: 1px;
  border-style: solid;
  background-color: ${(props: { isFocused: any }) =>
    props.isFocused ? color.primary : 'transparent'};
  border-radius: 6px;
  justify-content: center;
`;

export default Input;
