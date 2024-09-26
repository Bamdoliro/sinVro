import React from 'react';
import { ScrollView } from 'react-native';
import { CustomText, Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { InquiryScreenProps } from 'navigation/Navigation.type';

interface Questions {
  id: number;
  title: string;
  date: string;
  isAnswered: boolean;
}

const questions: Questions[] = [
  { id: 1, title: '캐릭터 대사가 이상해요', date: '2024.06.05', isAnswered: true },
  { id: 2, title: '캐릭터 말풍선 안 보임', date: '2024.06.05', isAnswered: false },
  {
    id: 3,
    title: '버그나서 캐릭터가 뒤집어졌어요',
    date: '2024.02.27',
    isAnswered: false,
  },
  {
    id: 4,
    title: '일기가 매일 와서 부담스러워요',
    date: '2024.09.19',
    isAnswered: false,
  },
  { id: 5, title: '편지가 한 달 째 안와요', date: '2024.03.12', isAnswered: false },
  { id: 6, title: '헌이가 답장을 안함', date: '2024.01.06', isAnswered: false },
  {
    id: 7,
    title: '새벽에 편지가 와요. 잠을 안 자는 듯',
    date: '2024.01.25',
    isAnswered: false,
  },
];

const InquiryPage = ({ navigation }: InquiryScreenProps) => {
  return (
    <StyledIntroduce>
      <Button onPress={() => navigation.navigate('SubmitInquiry' as never)}>
        문의하기
      </Button>
      <ScrollViewContainer>
        <ScrollView contentContainerStyle={{ paddingBottom: calculateHeight(0) }}>
          {questions.map((question) => (
            <QuestionContainer
              key={question.id}
              onPress={() => navigation.navigate('InquiryDetail', { id: question.id })}
            >
              <ContentContainer>
                <CustomText fontType="B5" color={color.white100}>
                  {question.title}
                </CustomText>
                <CustomText fontType="B6" color={color.white80}>
                  {question.date}
                </CustomText>
              </ContentContainer>
              {question.isAnswered && (
                <AnsweredBadge>
                  <CustomText fontType="B6" color={color.white100}>
                    답변 완료
                  </CustomText>
                </AnsweredBadge>
              )}
            </QuestionContainer>
          ))}
        </ScrollView>
      </ScrollViewContainer>
    </StyledIntroduce>
  );
};

export default InquiryPage;

const StyledIntroduce = styled.View`
  height: 100%;
  width: 100%;
  padding: ${calculateHeight(20)}px;
  padding-top: ${calculateHeight(44)}px;
  background-color: ${color.gray900};
  gap: ${calculateHeight(36)}px;
`;

const ScrollViewContainer = styled.View`
  height: ${calculateHeight(516)}px;
`;

const QuestionContainer = styled.TouchableOpacity`
  ${flex({ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' })}
  width: 100%;
  padding: ${calculateHeight(16)}px;
  background-color: ${color.glassWhite};
  border: 1px solid ${color.glassStroke};
  border-radius: 6px;
  margin-bottom: ${calculateHeight(8)}px;
`;

const ContentContainer = styled.View`
  ${flex({ flexDirection: 'column' })}
`;

const AnsweredBadge = styled.View`
  background-color: ${color.glassDark};
  border-radius: 999px;
  padding: ${calculateHeight(6)}px ${calculateWidth(12)}px;
`;
