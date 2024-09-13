import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import React, { ReactNode } from 'react';
import { flex } from '@sinabro/util';

interface Props {
  children: ReactNode;
}

const CharacterCategory = ({ children }: Props) => {
  return (
    <StyledCharacterCategory>
      <CustomText fontType="B5" color={color.gray900}>
        {children}
      </CustomText>
    </StyledCharacterCategory>
  );
};

export default CharacterCategory;

const StyledCharacterCategory = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: auto;
  height: 42px;
  background-color: ${color.primary};
  padding: 10px 20px;
  border-radius: 10px;
`;
