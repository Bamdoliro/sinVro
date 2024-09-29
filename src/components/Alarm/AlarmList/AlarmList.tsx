import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import AlarmItem from './AlarmItem/AlarmItem';

interface Props {
  id: number;
  title: string;
  content: string;
}

const List: Props[] = [
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
    content: '화났던 날의 일기에서의 일은 해결이 되었\n나요?',
  },
  {
    id: 7,
    title: '편지',
    content: '헌과 호감도가 상승했어요',
  },
];

const AlarmList = () => {
  return (
    <ScrollView>
      {List.map((question) => (
        <AlarmItem
          key={question.id}
          id={question.id}
          title={question.title}
          content={question.content}
        />
      ))}
    </ScrollView>
  );
};

export default AlarmList;
