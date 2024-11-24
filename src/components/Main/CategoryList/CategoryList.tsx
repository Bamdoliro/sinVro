import { Category, Row } from '@sinabro/ui';
import { ScrollView } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { useLetterListQuery } from 'services/letter/quries';

interface CharacterProps {
  freiendship?: number;
  type?: string;
}

const CategoryList = ({ freiendship, type }: CharacterProps) => {
  let relationship;

  const heonRelationshipLevels = [
    '어색한',
    '관심이 생긴',
    '자주 찾아보는',
    '항상 기다리는',
    '자꾸 생각나는',
    '하루의 일부가 된',
    '응원하고 싶은',
    '한마디가 힘이 되는',
    '가족과 같은',
    '나의 빛이 되는',
  ];

  const solRelationshipLevels = [
    '낯설다',
    '눈길이 가는',
    '궁금해지는',
    '괜히 기대하는',
    '계속 떠오르는',
    '매일의 일정 중 하나',
    '의지하고 싶은',
    '솔직한게 두렵지 않은',
    '또 다른 나 같은',
    '나를 찾아준 사람',
  ];

  if (freiendship !== undefined && freiendship >= 0 && freiendship <= 100) {
    const index = Math.floor(freiendship / 10);

    if (type === 'HEON') {
      relationship = heonRelationshipLevels[index];
    } else if (type === 'SOL') {
      relationship = solRelationshipLevels[index];
    }
  }

  const { data } = useLetterListQuery();
  const letterCount = data?.length ?? 0;

  return (
    <StyledScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <StyledRow alignItems="center" gap={8}>
        <Category>친밀도 {freiendship}</Category>
        <Category>{relationship}</Category>
        <Category>받은 편지 {letterCount}개</Category>
        <Category>만난 후 행복했던 날 3일</Category>
      </StyledRow>
    </StyledScrollView>
  );
};

export default CategoryList;

const StyledScrollView = styled(ScrollView)`
  margin-top: 20px;
  height: 38px;
`;

const StyledRow = styled(Row)`
  padding-left: 20px;
  padding-right: 20px;
`;
