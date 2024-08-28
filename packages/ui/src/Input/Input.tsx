import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput, Dimensions } from 'react-native';
import { InputOutline } from 'react-native-input-outline';
import { color, font } from '@sinabro/design-token';
import { divide } from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');
const { height: screenHeight } = Dimensions.get('window');
const iPhone13MiniWidth = 375;
const iPhone13MiniHeight = 780;

const calculateWidth = (baseWidth: number) => {
  return (screenWidth / iPhone13MiniWidth) * baseWidth;
};

const calculateHeight = (baseHeight: number) => {
  return (screenHeight / iPhone13MiniHeight) * baseHeight;
};

type Props = {
  onChange: (text: string) => void;
  placeholder: string;
  name?: string;
  value?: string;
  readOnly?: boolean;
};

const Input = ({ onChange, placeholder, readOnly, name, value }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <InputBack>
      <StyledTextInput
        placeholder={placeholder}
        placeholderTextColor={color.gray300}
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={!readOnly}
        isFocused={isFocused}
      />
    </InputBack>
  );
};

const InputBack = styled.View<{ isFocused: boolean }>`
  height: ${calculateHeight(52)}px;
  width: ${calculateWidth(294)}px;
  padding: 2px;
  border-radius: 8px;
  background-color: ${(props: { isFocused: any }) =>
    props.isFocused ? color.sinabroBlue : 'transparent'};
  justify-content: center;
`;

const StyledTextInput = styled(TextInput)<{ isFocused: boolean }>`
  ${font.B5}
  height: ${calculateHeight(48)}px;
  width: ${calculateWidth(290)}px;
  padding-left: ${calculateWidth(16)}px;
  padding-right: ${calculateWidth(16)}px;

  background-color: ${color.gray50};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props: { isFocused: any }) =>
    props.isFocused ? color.primary : 'transparent'};
  border-radius: 6px;
  color: ${color.gray800};
`;

export default Input;
