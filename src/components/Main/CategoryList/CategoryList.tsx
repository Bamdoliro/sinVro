import { Category, Row } from '@sinabro/ui';
import { ScrollView } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const CategoryList = () => {
  return (
    <StyledScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <StyledRow alignItems="center" gap={8}>
        <Category>친밀도 12</Category>
        <Category>우리 어사 아니에요</Category>
        <Category>받은 편지 5개</Category>
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
