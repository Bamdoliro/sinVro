import React from 'react';
import { color } from '@sinabro/design-token';
import { IconWhiteBell } from '@sinabro/icon';
import { Column, CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth } from '@sinabro/util';
import styled from 'styled-components/native';

interface Props {
  id: number | null;
  title: string;
  content: string | null;
}

const AlarmItem = ({ id, title, content }: Props) => {
  return (
    <>
      <AlarmContainer key={id}>
        <IconWhiteBell width={23} height={28} />
        <Column gap={4} alignItems="start">
          <CustomText fontType="B6" color={color.white80}>
            {title}
          </CustomText>
          <CustomText fontType="H5" color={color.white100}>
            {content}
          </CustomText>
        </Column>
        <QuestionContainer />
      </AlarmContainer>
      <Separator />
    </>
  );
};

export default AlarmItem;

const AlarmContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${calculateHeight(16)}px ${calculateWidth(20)}px;
  gap: ${calculateHeight(12)}px;
  border-bottom-left-radius: 20px;
`;

const QuestionContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  gap: ${calculateHeight(16)}px;
`;

const Separator = styled.View`
  height: 1px;
  background-color: ${color.glassStroke};
  margin-left: ${calculateWidth(20)}px;
  margin-right: ${calculateWidth(20)}px;
`;
