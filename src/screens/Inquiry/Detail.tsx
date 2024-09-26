import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { DetailScreenProps } from 'navigation/Navigation.type';

interface Questions {
  id: number;
  title: string;
  date: string;
  content: string;
  answer: string;
}

const questions: Questions[] = [
  {
    id: 1,
    title: '캐릭터 대사가 이상해요',
    date: '2024.06.05',
    content:
      '솔이가 편지를 보낼 때 갑자기 이상한 ~~말투를 써요 빠른 해결 부탁드립니다 몰입이 확깨네요',
    answer:
      '저희의 미흡했던 점을 알려주셔서 감사합니다. 편지의 말투는 현재 수정 중이며 곧 안정화된 편지를 받아보실 수 있을 겁니다.',
  },
  {
    id: 2,
    title: '결제 관련 문의',
    date: '2024-09-11',
    content: '결제 관련 문의에 대한 상세 내용',
    answer:
      '저희의 미흡했던 점을 알려주셔서 감사합니다. 편지의 말투는 현재 수정 중이며 곧 안정화된 편지를 받아보실 수 있을 겁니다.',
  },
];

const InquiryDetailPage = ({ route }: DetailScreenProps) => {
  const { id } = route.params as unknown as { id: number };
  const question = questions.find((q) => q.id === id);

  if (!question) {
    return (
      <View>
        <CustomText fontType="B5" color={color.white100}>
          해당 질문을 찾을 수 없습니다.
        </CustomText>
      </View>
    );
  }

  return (
    <StyledQuestionDetail>
      <QuestionContainer>
        <CustomText fontType="B5" color={color.white80}>
          {question.date}
        </CustomText>
        <CustomText fontType="B5" color={color.white100}>
          {question.content}
        </CustomText>
      </QuestionContainer>
      <Separator />
      <AnswerContainer>
        <CustomText fontType="B5" color={color.white80}>
          밤돌이로팀의 답장
        </CustomText>
        <CustomText fontType="B5" color={color.white100}>
          {question.answer}
        </CustomText>
      </AnswerContainer>
    </StyledQuestionDetail>
  );
};

export default InquiryDetailPage;

const StyledQuestionDetail = styled.View`
  background-color: ${color.gray900};
  width: 100%;
  height: 100%;
  padding: ${calculateHeight(56)}px ${calculateWidth(20)}px;
  gap: ${calculateHeight(28)}px;
`;

const QuestionContainer = styled.View`
  gap: ${calculateHeight(20)}px;
`;

const AnswerContainer = styled.View`
  gap: ${calculateHeight(20)}px;
`;

const Separator = styled.View`
  height: ${calculateHeight(1)}px;
  background-color: ${color.glassStroke};
`;
