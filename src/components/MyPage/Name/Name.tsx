import React from 'react';
import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { flex, useNameStore } from '@sinabro/util';
import styled from 'styled-components/native';

const Name = () => {
  const { name } = useNameStore();

  return (
    <StyledName>
      <CustomText fontType="H1" color={color.white100}>
        {name}
      </CustomText>
    </StyledName>
  );
};

export default Name;

const StyledName = styled.View`
  ${flex({ alignItems: 'center' })}
`;
