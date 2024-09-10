import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { color, font } from '@sinabro/design-token';
import { calculateHeight, calculateWidth } from '@sinabro/util';

type Props = {
  onChange: (text: string) => void;
  placeholder: string;
  name?: string;
  value?: string;
  readOnly?: boolean;
};

const Input = ({ onChange, placeholder, readOnly, value }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <InputBack isFocused={isFocused}>
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
  ${(props: { isFocused: any }) =>
    props.isFocused &&
    `
    height: ${calculateHeight(52)}px;
    width: ${calculateWidth(294)}px;
    padding: 2px;
    border-radius: 8px;
    background-color: #f7dac5;
    justify-content: center;
  `}
`;

const StyledTextInput = styled(TextInput)<{ isFocused: boolean }>`
  ${font.B5}
  height: ${(props: { isFocused: any }) => calculateHeight(props.isFocused ? 48 : 52)}px;
  width: ${(props: { isFocused: any }) => calculateWidth(props.isFocused ? 290 : 294)}px;
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
