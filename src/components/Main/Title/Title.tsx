import { Column, CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import React from 'react';
import { color } from '@sinabro/design-token';

const Title = () => {
  return (
    <StyledTitle>
      <Column alignItems="center">
        <CustomText fontType="B5" color={color.white100}>
          우리가 만난지 벌써 7일
        </CustomText>
        <CustomText fontType="H1" color={color.white100}>
          헌
        </CustomText>
      </Column>
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.View`
  margin-top: 85px;
`;
