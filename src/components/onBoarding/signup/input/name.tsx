import { color, font } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import React from 'react';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const NameInput = ({ value, onChange }: Props) => {
  return (
    <StyledEmailInput>
      <CustomText fontType="B5" color={color.white100}>
        이름
      </CustomText>
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder="불리고 싶은 이름을 입력해주세요"
        placeholderTextColor={color.gray300}
      />
    </StyledEmailInput>
  );
};

export default NameInput;

const StyledEmailInput = styled.View`
  ${flex({ alignItems: 'flex-start' })}
  margin-top: 131px;
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
