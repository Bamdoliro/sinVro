import React from 'react';
import { ScrollView } from 'react-native';
import { CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { IconWhiteBell } from '@sinabro/icon';

interface Alarm {
  id: number;
  title: string;
  content: string;
}

const AlarmList: Alarm[] = [
  {
    id: 1,
    title: '편지',
    content: '헌이 보낸 편지 3통이 우편함에 쌓여있어요',
  },
  {
    id: 2,
    title: '하루일기',
    content: '오늘 밤돌이로님의 하루는 어땠나요?',
  },
  {
    id: 3,
    title: '하루일기',
    content: '기뻤던 날의 일기를 다시 보는 건 어때요?',
  },
  {
    id: 4,
    title: '편지',
    content: '헌이 편지를 보냈어요',
  },
  {
    id: 5,
    title: '호감',
    content: '헌과 호감도가 상승했어요',
  },
  {
    id: 6,
    title: '편지',
    content: '화났던 날의 일기에서의 일은 해결이 되었나요?',
  },
  {
    id: 7,
    title: '편지',
    content: '헌과 호감도가 상승했어요',
  },
];

const AlarmPage = () => {
  return (
    <StyledAlarmPagee>
      <ScrollViewContainer>
        <ScrollView contentContainerStyle={{ paddingBottom: calculateHeight(0) }}>
          {AlarmList.map((question) => (
            <AlarmContainer key={question.id}>
              <IconContainer>
                <IconWhiteBell width={23} height={28}></IconWhiteBell>
              </IconContainer>
              <QuestionContainer>
                <CustomText fontType="B6" color={color.white80}>
                  {question.title}
                </CustomText>
                <CustomText fontType="B4" color={color.white100}>
                  {question.content}
                </CustomText>
              </QuestionContainer>
            </AlarmContainer>
          ))}
        </ScrollView>
      </ScrollViewContainer>
    </StyledAlarmPagee>
  );
};

export default AlarmPage;

const StyledAlarmPagee = styled.View`
  height: 100%;
  width: 100%;
  padding: ${calculateHeight(20)}px;
  padding-top: ${calculateHeight(36)}px;
  background-color: ${color.gray900};
  gap: ${calculateHeight(36)}px;
`;

const ScrollViewContainer = styled.View`
  height: ${calculateHeight(580)}px;
`;

const AlarmContainer = styled.View`
  ${flex({ flexDirection: 'row' })}
  width: 100%;
  padding: ${calculateHeight(16)}px ${calculateWidth(0)}px;
  gap: ${calculateHeight(12)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.glassStroke};
`;

const QuestionContainer = styled.View`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  border-radius: 6px;
  gap: ${calculateHeight(4)}px;
`;

const IconContainer = styled.View``;
