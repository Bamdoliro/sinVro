import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components/native';
import { flex } from '@sinabro/util';
import { color } from '@sinabro/design-token';

type Props = {
  onChange: () => void;
  placeholder: string;
  width?: number;
  name?: string;
  value?: string;
  textAlign?: CSSProperties['textAlign'];
  readOnly?: boolean;
};

const Input = ({ onChange, placeholder, width, readOnly, name, value }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledInput
      onChangeText={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
      readOnly={readOnly}
      style={{ width }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      isFocused={isFocused}
    />
  );
};

export default Input;

const StyledInput = styled.TextInput<{ width: number; isFocused: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  border-radius: 6px;
  word-break: keep-all;
  color: ${color.gray800};
  height: 48px;
  width: ${(props: { width: undefined; }) => (props.width !== undefined ? `${props.width}px` : '300px')};
  padding: 10px 16px;
  border: ${(props: { isFocused: any; }) =>
    props.isFocused ? `1px solid ${color.primary}` : '1px solid transparent'};
 
  &::placeholder {
    color: ${color.gray500};
  }
`;
