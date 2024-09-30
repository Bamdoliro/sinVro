import React from 'react';
import { color, font } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { calculateHeight, calculateWidth } from '@sinabro/util';

interface InputProps {
  textValue: string;
  setTextValue: (text: string) => void;
}

const Input = ({ textValue, setTextValue }: InputProps) => {
  const Limit = 1000;

  return (
    <StyledInput>
      <TextInput
        value={textValue}
        placeholder="문의 내용을 입력해주세요"
        placeholderTextColor={color.gray300}
        multiline
        scrollEnabled={true}
        onChangeText={setTextValue}
        maxLength={Limit}
      />
      <CustomTextContainer>
        <CustomText fontType="caption" color={color.gray300}>
          {textValue.length}/{Limit}
        </CustomText>
      </CustomTextContainer>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.View`
  width: ${calculateWidth(335)}px;
  height: ${calculateHeight(160)}px;
  background-color: ${color.white100};
  padding: ${calculateHeight(8)}px ${calculateWidth(16)}px ${calculateHeight(16)}px
    ${calculateWidth(16)}px;
  border-radius: 6px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: ${calculateHeight(124)}px;
  color: ${color.gray800};
  ${font.B5};
`;

const CustomTextContainer = styled.View`
  position: absolute;
  bottom: ${calculateHeight(8)}px;
  right: ${calculateWidth(16)}px;
`;
