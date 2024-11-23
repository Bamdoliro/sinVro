import React from 'react';
import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { flex } from '@sinabro/util';
import styled from 'styled-components/native';
import { useUserQuery } from 'services/user/quries';

const Name = () => {
  const { data } = useUserQuery();

  return (
    <StyledName>
      <CustomText fontType="H1" color={color.white100}>
        {data?.name}
      </CustomText>
    </StyledName>
  );
};

export default Name;

const StyledName = styled.View`
  ${flex({ alignItems: 'center' })}
`;
