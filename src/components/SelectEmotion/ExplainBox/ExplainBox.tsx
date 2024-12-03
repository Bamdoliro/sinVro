import React from 'react';
import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';

const ExplainBox = () => {
  return (
    <StyledExplainBox>
      <CustomText fontType="H6" color={color.white100}>
        오늘의 감정을 어떻게 표현하고 싶으신가요?
      </CustomText>
      <CustomText fontType="H6" color={color.white100}>
        (최대 선택 개수 3개)
      </CustomText>
    </StyledExplainBox>
  );
};

export default ExplainBox;

const StyledExplainBox = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(335)}px;
  height: 76px;
  background-color: ${color.glassWhite};
  border-radius: 12px;
  border: 1px solid ${color.glassStroke};
  margin-bottom: 12px;
`;
