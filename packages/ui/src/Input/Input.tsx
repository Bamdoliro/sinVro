import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput, Dimensions } from 'react-native';
import { color } from '@sinabro/design-token';

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
  width?: number;
  name?: string;
  value?: string;
  readOnly?: boolean;
};

const Input = ({ onChange, placeholder, width, readOnly, name, value }: Props) => {
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
      style={{ width: width ? calculateWidth(width) : '100%' }}
    />
  );
};

const StyledTextInput = styled(TextInput)<{ isFocused: boolean }>`
  height: ${calculateHeight(48)}px;
  width: ${calculateHeight(180)}px;
  padding-left: ${calculateHeight(16)}px;
  padding-right: ${calculateHeight(16)}px;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props: { isFocused: any }) =>
    props.isFocused ? color.primary : 'transparent'};
  border-radius: 6px;
  color: ${color.gray800};
`;

export default Input;
