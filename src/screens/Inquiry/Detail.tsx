import React from 'react';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { color } from '@sinabro/design-token';
import { CustomText } from '@sinabro/ui';
import { calculateHeight } from '@sinabro/util';
import { Header } from 'components/common';

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

const InquiryDetailPage = () => {
  const route = useRoute();
  const { id } = route.params as { id: number };

  const question = questions.find((q) => q.id === id);

  if (!question) {
    return (
      <StyledQuestionDetail>
        <CustomText fontType="B5" color={color.white100}>
          질문을 찾을 수 없습니다.
        </CustomText>
      </StyledQuestionDetail>
    );
  }

  return (
    <StyledQuestionDetail>
      <Header title="문의" />
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
  flex: 1;
  background-color: ${color.gray900};
`;

const QuestionContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${calculateHeight(147)}px;
  gap: 12px;
`;

const AnswerContainer = styled.View`
  margin-top: ${calculateHeight(28)}px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Separator = styled.View`
  height: ${calculateHeight(1)}px;
  background-color: ${color.glassStroke};
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 32px;
`;
