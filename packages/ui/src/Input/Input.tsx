import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput, Dimensions } from 'react-native';
import { color, font } from '@sinabro/design-token';

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
  );
};

const StyledTextInput = styled(TextInput)<{ isFocused: boolean }>`
  ${font.B5}
  height: ${calculateHeight(48)}px; 
  width: ${calculateWidth(290)}px;
  padding-left: ${calculateWidth(16)}px;
  padding-right: ${calculateWidth(16)}px;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props: {isFocused: any}) => (props.isFocused ? color.primary : 'transparent')};
  border-radius: 6px;
  color: ${color.gray800};
`;

export default Input;
