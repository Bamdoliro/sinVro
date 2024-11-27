import { color, font } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import React from 'react';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const EmailInput = ({ value, onChange }: Props) => {
  return (
    <StyledEmailInput>
      <CustomText fontType="B5" color={color.white100}>
        이메일
      </CustomText>
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder="이메일을 입력하세요"
        placeholderTextColor={color.gray300}
      />
    </StyledEmailInput>
  );
};

export default EmailInput;

const StyledEmailInput = styled.View`
  ${flex({ alignItems: 'flex-start' })}
  width: ${calculateWidth(335)}px;
  height: ${calculateHeight(86)}px;
`;

const StyledInput = styled.TextInput`
  ${font.B5}
  width: 100%;
  height: ${calculateHeight(56)}px;
  color: ${color.gray900};
  background-color: ${color.white100};
  margin-top: 4px;
  padding-left: ${calculateWidth(10)}px;
  border-radius: ${calculateHeight(6)}px;
  padding-left: 16px;
  padding-bottom: 17px;
  padding-right: 17px;
  padding-top: 17px;
`;
