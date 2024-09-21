import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { color, font } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

type Props = {
  onChange: (text: string) => void;
  onSubmit?: (text: string) => void;
  placeholder: string;
  name?: string;
  value?: string;
  readOnly?: boolean;
};

const Input = ({ onChange, onSubmit, placeholder, readOnly, value }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <StyledInput>
      <InputBack isFocused={isFocused}>
        <StyledTextInput
          placeholder={placeholder}
          placeholderTextColor={color.gray300}
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={onSubmit}
          editable={!readOnly}
          isFocused={isFocused}
        />
      </InputBack>
    </StyledInput>
  );
};

const StyledInput = styled.View`
  ${flex({ alignItems: 'center' })}
`;

const InputBack = styled.View<{ isFocused: boolean }>`
  ${(props: { isFocused: any }) =>
    props.isFocused &&
    `
    height: ${calculateHeight(56)}px;
    width: ${calculateWidth(340)}px;
    padding: 2px;
    border-radius: 8px;
    background-color: #f7dac5;
    justify-content: center;
  `}
`;

const StyledTextInput = styled(TextInput) <{ isFocused: boolean }>`
  ${font.B5}
  height: ${(props: { isFocused: any }) => calculateHeight(props.isFocused ? 52 : 56)}px;
  width: ${(props: { isFocused: any }) => calculateWidth(props.isFocused ? 335 : 340)}px;
  padding-left: ${calculateWidth(16)}px;
  padding-right: ${calculateWidth(16)}px;
  line-height: normal;
  background-color: ${color.gray50};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props: { isFocused: any }) =>
    props.isFocused ? color.primary : 'transparent'};
  border-radius: 6px;
  color: ${color.gray800};
`;

export default Input;
