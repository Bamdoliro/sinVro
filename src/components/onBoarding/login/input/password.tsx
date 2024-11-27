import { color, font } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import React from 'react';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput = ({ value, onChangeText }: Props) => {
  return (
    <StyledPasswordInputt>
      <CustomText fontType="B5" color={color.white100}>
        비밀번호
      </CustomText>
      <StyledInput
        value={value}
        onChangeText={onChangeText}
        placeholder="이메일을 입력하세요"
        placeholderTextColor={color.gray300}
      />
    </StyledPasswordInputt>
  );
};

export default PasswordInput;

const StyledPasswordInputt = styled.View`
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
