import React from 'react';
import { color, font } from '@sinabro/design-token';
import { calculateHeight, calculateWidth } from '@sinabro/util';
import styled from 'styled-components/native';

interface InputProps {
  textValue: string;
  setTextValue: (text: string) => void;
}

const DiaryInput = ({ textValue, setTextValue }: InputProps) => {
  return (
    <StyledInput>
      <StyledTextInput
        value={textValue}
        placeholder="텍스트를 입력해주세요."
        placeholderTextColor={color.gray300}
        multiline
        scrollEnabled={true}
        onChangeText={setTextValue}
        textAlign="left"
      />
    </StyledInput>
  );
};

export default DiaryInput;

const StyledInput = styled.View`
  width: ${calculateWidth(335)}px;
  height: ${calculateHeight(546)}px;
  padding-bottom: 18px;
  background-color: ${color.white100};
`;

const StyledTextInput = styled.TextInput<{ textValue: string }>`
  width: 100%;
  height: 100%;
  color: ${color.gray800};
  ${font.B5Letter}
`;
