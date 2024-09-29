import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { calculateHeight } from '@sinabro/util';
import ContentItem from './ContentItem/ContentItem';

interface QuestionItem {
  id: number;
  title: string;
  date: string;
  isAnswered: boolean;
}

const questions: QuestionItem[] = [
  { id: 1, title: '캐릭터 대사가 이상해요', date: '2024.06.05', isAnswered: true },
  { id: 2, title: '캐릭터 말풍선 안 보임', date: '2024.06.05', isAnswered: true },
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

const ContentList: React.FC = () => {
  return (
    <StyledContentList>
      <ScrollView>
        {questions.map((item) => (
          <ContentItem
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            isAnswer={item.isAnswered}
          />
        ))}
      </ScrollView>
    </StyledContentList>
  );
};

export default ContentList;

const StyledContentList = styled.View`
  height: ${calculateHeight(516)}px;
  padding-left: ${calculateHeight(20)}px;
  padding-right: ${calculateHeight(20)}px;
  padding-bottom: ${calculateHeight(35)}px;
`;
