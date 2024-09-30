import {
  IconAmazed,
  IconAnger,
  IconCommon,
  IconDepressed,
  IconEmbarrassment,
  IconHappiness,
  IconPleasure,
  IconSad,
} from '@sinabro/icon';
import { EmotionCard } from '@sinabro/ui';
import React, { useEffect, useState } from 'react';
import { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface Emotion {
  id: number;
  icon: JSX.Element;
  emotion: string;
  englishEmotion: string;
  detail1: string;
  detail2: string;
  detail3: string;
}

const emotions: Emotion[] = [
  {
    id: 1,
    icon: <IconPleasure width={90} height={87} />,
    emotion: '기쁜',
    englishEmotion: 'Joy',
    detail1: '뿌듯한',
    detail2: '보람찬',
    detail3: '쾌감/희열',
  },
  {
    id: 2,
    icon: <IconSad width={90} height={87} />,
    emotion: '슬픈',
    englishEmotion: 'Sadness',
    detail1: '섭섭한',
    detail2: '속상한',
    detail3: '아쉬운',
  },
  {
    id: 3,
    icon: <IconAmazed width={90} height={87} />,
    emotion: '놀란',
    englishEmotion: 'Surprise',
    detail1: '감탄한',
    detail2: '놀라운',
    detail3: '경악한',
  },
  {
    id: 4,
    icon: <IconHappiness width={90} height={87} />,
    emotion: '사랑',
    englishEmotion: 'Love',
    detail1: '설레다',
    detail2: '두근거리다',
    detail3: '헌신하다',
  },
  {
    id: 5,
    icon: <IconDepressed width={90} height={87} />,
    emotion: '우울한',
    englishEmotion: 'Depression',
    detail1: '시무룩한',
    detail2: '절망스러운',
    detail3: '허무한',
  },
  {
    id: 6,
    icon: <IconCommon width={90} height={87} />,
    emotion: '평범한',
    englishEmotion: 'Ordinary',
    detail1: '평화로운',
    detail2: '안락한',
    detail3: '안정된',
  },
  {
    id: 7,
    icon: <IconEmbarrassment width={90} height={87} />,
    emotion: '당황스러운',
    englishEmotion: 'Embarrassment',
    detail1: '당혹스러운',
    detail2: '떨떠름한',
    detail3: '의아한',
  },
  {
    id: 8,
    icon: <IconAnger width={90} height={87} />,
    emotion: '화가 난',
    englishEmotion: 'Anger',
    detail1: '짜증나는',
    detail2: '분한',
    detail3: '울화통 터지는',
  },
];

interface EmotionListProps {
  onDetailsChange: (selectedDetails: string[]) => void;
  onDetailSelect: (emotion: string) => void;
}

const EmotionList: React.FC<EmotionListProps> = ({ onDetailsChange, onDetailSelect }) => {
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);

  const handleDetailToggle = (emotion: string) => {
    setSelectedDetails((prev) =>
      prev.includes(emotion)
        ? prev.filter((item) => item !== emotion)
        : [...prev, emotion]
    );
  };

  useEffect(() => {
    onDetailsChange(selectedDetails);
  }, [selectedDetails, onDetailsChange]);

  return (
    <StyledEmotionList>
      <ScrollView contentContainerStyle={scrollViewContentStyle}>
        {emotions.map((item) => (
          <StyledEmotionCard key={item.id}>
            <EmotionCard
              children={item.icon}
              emotion={item.emotion}
              englishEmotion={item.englishEmotion}
              detail1={item.detail1}
              detail2={item.detail2}
              detail3={item.detail3}
              onPress={() => handleDetailToggle(item.emotion)}
              onDetailSelect={onDetailSelect}
            />
          </StyledEmotionCard>
        ))}
      </ScrollView>
    </StyledEmotionList>
  );
};

export default EmotionList;

const scrollViewContentStyle: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const StyledEmotionList = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 85px;
`;

const StyledEmotionCard = styled.View`
  max-width: 335px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;
