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
import React, { useState, useEffect, useCallback } from 'react';
import { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDiaryStore } from 'stores/diary/diary';
import styled from 'styled-components/native';

interface Emotion {
  id: number;
  icon: JSX.Element;
  emotion: string;
  englishEmotion: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail1Value: string;
  detail2Value: string;
  detail3Value: string;
}

const emotions: Emotion[] = [
  {
    id: 1,
    icon: <IconPleasure width={90} height={87} />,
    emotion: '기쁜',
    englishEmotion: 'Joyful',
    detail1: '뿌듯한',
    detail1Value: 'PROUD',
    detail2: '보람찬',
    detail2Value: 'FRUITFUL',
    detail3: '황홀한',
    detail3Value: 'ECSTATIC',
  },
  {
    id: 2,
    icon: <IconSad width={90} height={87} />,
    emotion: '슬픈',
    englishEmotion: 'Sad',
    detail1: '섭섭한',
    detail1Value: 'DISAPPOINTED',
    detail2: '속상한',
    detail2Value: 'UPSET',
    detail3: '아쉬운',
    detail3Value: 'REGRETFUL',
  },
  {
    id: 3,
    icon: <IconAmazed width={90} height={87} />,
    emotion: '놀란',
    englishEmotion: 'Suprised',
    detail1: '감탄한',
    detail1Value: 'IMPRESSED',
    detail2: '놀라운',
    detail2Value: 'AMAZED',
    detail3: '경악한',
    detail3Value: 'ASTOUNDED',
  },
  {
    id: 4,
    icon: <IconHappiness width={90} height={87} />,
    emotion: '사랑',
    englishEmotion: 'Romantic',
    detail1: '설레는',
    detail1Value: 'EXCITED',
    detail2: '두근거리는',
    detail2Value: 'POUNDING',
    detail3: '헌신적인',
    detail3Value: 'DEDICATED',
  },
  {
    id: 5,
    icon: <IconDepressed width={90} height={87} />,
    emotion: '우울한',
    englishEmotion: 'Depressed',
    detail1: '시무룩한',
    detail1Value: 'GLOOMY',
    detail2: '절망스러운',
    detail2Value: 'HOPELESS',
    detail3: '허무한',
    detail3Value: 'VAIN',
  },
  {
    id: 6,
    icon: <IconCommon width={90} height={87} />,
    emotion: '평범한',
    englishEmotion: 'Ordinary',
    detail1: '평화로운',
    detail1Value: 'PEACEFUL',
    detail2: '안락한',
    detail2Value: 'COMFORTABLE',
    detail3: '안정된',
    detail3Value: 'CALM',
  },
  {
    id: 7,
    icon: <IconEmbarrassment width={90} height={87} />,
    emotion: '당황스러운',
    englishEmotion: 'Embarrassed',
    detail1: '당혹스러운',
    detail1Value: 'EMBARRASSED',
    detail2: '떨떠름한',
    detail2Value: 'BITTER',
    detail3: '의아한',
    detail3Value: 'PUZZELD',
  },
  {
    id: 8,
    icon: <IconAnger width={90} height={87} />,
    emotion: '화난',
    englishEmotion: 'Angry',
    detail1: '짜증나는',
    detail1Value: 'IRRITATED',
    detail2: '분한',
    detail2Value: 'FURIOUS',
    detail3: '울화통 터지는',
    detail3Value: 'ENRAGED',
  },
];

interface EmotionListProps {
  onDetailsChange: (selectedDetails: string[]) => void;
  onDetailSelect: (emotion: string) => void;
}

interface EmotionState {
  selectedEmotion: string | null;
  emotionOrder: number[];
}

const EmotionList = ({ onDetailsChange }: EmotionListProps) => {
  const { setEmotionList, getEmotionList } = useDiaryStore();
  const [emotionState, setEmotionState] = useState<EmotionState>({
    selectedEmotion: null,
    emotionOrder: [0, 1, 2, 3, 4, 5, 6, 7],
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDetailValue = (emotion: Emotion, detail: string): string => {
    if (detail === emotion.detail1) {
      return emotion.detail1Value;
    }
    if (detail === emotion.detail2) {
      return emotion.detail2Value;
    }
    if (detail === emotion.detail3) {
      return emotion.detail3Value;
    }
    return detail;
  };

  const getDisplayDetails = (storedDetails: string[], emotion: Emotion): string[] => {
    return storedDetails.map((detail) => {
      if (detail === emotion.detail1Value) {
        return emotion.detail1;
      }
      if (detail === emotion.detail2Value) {
        return emotion.detail2;
      }
      if (detail === emotion.detail3Value) {
        return emotion.detail3;
      }
      return detail;
    });
  };

  const handleEmotionToggle = useCallback((emotion: string, index: number) => {
    setEmotionState((prevState) => {
      const newState = { ...prevState };

      if (prevState.selectedEmotion === emotion) {
        newState.selectedEmotion = null;
        newState.emotionOrder = [0, 1, 2, 3, 4, 5, 6, 7];
      } else {
        newState.selectedEmotion = emotion;

        // Update order
        const adjustedIndex = index + 1;
        newState.emotionOrder = [...newState.emotionOrder];
        if (adjustedIndex % 2 === 0) {
          const temp = newState.emotionOrder[index];
          newState.emotionOrder[index] = newState.emotionOrder[index - 1];
          newState.emotionOrder[index - 1] = temp;
        }
      }

      return newState;
    });
  }, []);

  const sortedEmotions = useCallback(() => {
    return emotionState.emotionOrder.map((order) => emotions[order]);
  }, [emotionState.emotionOrder]);

  useEffect(() => {
    if (emotionState.selectedEmotion) {
      onDetailsChange(getEmotionList());
    } else {
      onDetailsChange([]);
    }
  }, [emotionState.selectedEmotion, getEmotionList, onDetailsChange]);

  const handleDetailSelect = useCallback(
    (detail: string, emotion: Emotion) => {
      const currentDetails = getEmotionList();
      const detailValue = getDetailValue(emotion, detail);
      const updatedDetails = currentDetails.includes(detailValue)
        ? currentDetails.filter((item) => item !== detailValue)
        : [...currentDetails, detailValue];

      setEmotionList(updatedDetails);
    },
    [getEmotionList, setEmotionList, getDetailValue]
  );

  return (
    <StyledEmotionList>
      <ScrollView contentContainerStyle={scrollViewContentStyle}>
        {sortedEmotions().map((item, index) => (
          <StyledEmotionCard key={item.id}>
            <EmotionCard
              indexNumber={item.id}
              children={item.icon}
              emotion={item.emotion}
              englishEmotion={item.englishEmotion}
              detail1={item.detail1}
              detail2={item.detail2}
              detail3={item.detail3}
              onPress={() => handleEmotionToggle(item.emotion, index)}
              onDetailSelect={(detail) => handleDetailSelect(detail, item)}
              isSelected={emotionState.selectedEmotion === item.emotion}
              selectedDetails={getDisplayDetails(getEmotionList(), item)}
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
