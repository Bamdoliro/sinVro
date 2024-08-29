import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
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
  onChange: (text: string) => void;
  children: string;
};

const Input = ({ onChange, children }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <InputBack isFocused={isFocused}>
      <StyledTextInput
        placeholderTextColor={color.gray300}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        isFocused={isFocused}
      >
        <Row alignItems="center" justifyContent="center">
          <CustomText fontType="B3" color={isFocused ? color.white100: color.gray900}>{children}</CustomText>
        </Row>
      </StyledTextInput>
    </InputBack>
  );
};

const InputBack = styled.View<{ isFocused: boolean }>`
  ${(props: { isFocused: any }) =>
    props.isFocused &&
    `
    height: ${calculateHeight(200)}px;
    width: ${calculateWidth(160)}px;
    padding: 2px;
    border-radius: 8px;
    background-color: #f7dac5;
    justify-content: center;
  `}
`;

const StyledTextInput = styled.View<{ isFocused: boolean }>`
  ${font.B5}
  height: ${calculateHeight(200)}px;
  width: ${calculateWidth(160)}px;
  padding-left: ${calculateWidth(16)}px;
  padding-right: ${calculateWidth(16)}px;

  border-color: ${color.primary};
  border-width: 1px;
  border-style: solid;
  background-color: ${(props: { isFocused: any }) =>
    props.isFocused ? color.primary : 'transparent'};
  border-radius: 6px;
  color: ${color.gray800};
`;

export default Input;
