import { IconHeon } from '@sinabro/icon';
import { CharacterChat, Column } from '@sinabro/ui';
import React from 'react';
import styled from 'styled-components/native';

const Character = () => {
  return (
    <StyledCharcter>
      <Column alignItems="center" gap={20}>
        <CharacterChat>너를 만나 내 일상이 다채로워졌어</CharacterChat>
        <IconHeon width={200} height={181.27} />
      </Column>
    </StyledCharcter>
  );
};

export default Character;

const StyledCharcter = styled.View`
  margin-top: 136px;
`;
