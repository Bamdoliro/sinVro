import { Column, CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import React, { useMemo } from 'react';
import { color } from '@sinabro/design-token';

interface CharacterProps {
  createdDate?: number | null;
  type?: string;
}

const Title = ({ createdDate, type }: CharacterProps) => {
  const date = useMemo(() => {
    if (!createdDate) {
      return;
    }

    const createdAt = new Date(createdDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - createdAt.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }, [createdDate]);

  return (
    <StyledTitle>
      <Column alignItems="center">
        <CustomText fontType="B5" color={color.white100}>
          우리가 만난지 벌써 {date ?? 0}일
        </CustomText>
        <CustomText fontType="H1" color={color.white100}>
          {type === 'HEON' ? '헌' : '솔'}
        </CustomText>
      </Column>
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.View`
  margin-top: 85px;
`;
