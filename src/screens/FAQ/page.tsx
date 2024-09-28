import React, { useRef } from 'react';
import { ScrollView, Animated, LayoutAnimation, UIManager, Platform } from 'react-native';
import { CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { IconInequality } from '@sinabro/icon';
import { Header } from 'components/common';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Questions {
  id: number;
  question: string;
  content: string;
}

const faqQuestions: Questions[] = [
  {
    id: 1,
    question: '밤돌이로 자묻질 좀 채워주세요',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 2,
    question: '캐릭터 말풍선 안 보임',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 3,
    question: '버그나서 캐릭터가 뒤집어졌어요',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 4,
    question: '일기가 매일 와서 부담스러워요',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 5,
    question: '편지가 한 달 째 안와요',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 6,
    question: '헌이가 답장을 안함',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 7,
    question: '새벽에 편지가 와요. 잠을 안 자는 듯',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 8,
    question: '편지가 한 달 째 안와요',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 9,
    question: '헌이가 답장을 안함',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
  {
    id: 10,
    question: '새벽에 편지가 와요. 잠을 안 자는 듯',
    content: '캐릭터들의 편지는 보통 1일~3일 내에 1통 발송됩니다',
  },
];

const FAQPage = () => {
  const [selectedQuestionId, setSelectedQuestionId] = React.useState<number | null>(null);
  const animatedValues = useRef(faqQuestions.map(() => new Animated.Value(0))).current;

  const handleToggleQuestion = (id: number) => {
    const index = faqQuestions.findIndex((question) => question.id === id);
    const isSelected = selectedQuestionId === id;

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setSelectedQuestionId(isSelected ? null : id);

    Animated.timing(animatedValues[index], {
      toValue: isSelected ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <StyledFAQPage>
      <Header title="자주 묻는 질문" />
      <ScrollViewContainer>
        <ScrollView contentContainerStyle={{ paddingBottom: calculateHeight(0) }}>
          {faqQuestions.map((question, index) => {
            const height = animatedValues[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0, calculateHeight(77)],
            });
            const opacity = animatedValues[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            });
            return (
              <FAQContainer
                key={question.id}
                onPress={() => handleToggleQuestion(question.id)}
                activeOpacity={1}
              >
                <QuestionContainer>
                  <CustomText fontType="B4" color={color.white100}>
                    {question.question}
                  </CustomText>
                  <IconContainer rotate={selectedQuestionId === question.id}>
                    <IconInequality width={11} height={20}></IconInequality>
                  </IconContainer>
                </QuestionContainer>
                {selectedQuestionId === question.id && (
                  <Animated.View style={{ height, opacity, overflow: 'hidden' }}>
                    <ContentContainer>
                      <CustomText fontType="B5" color={color.gray700}>
                        {question.content}
                      </CustomText>
                    </ContentContainer>
                  </Animated.View>
                )}
              </FAQContainer>
            );
          })}
        </ScrollView>
      </ScrollViewContainer>
    </StyledFAQPage>
  );
};

export default FAQPage;

const StyledFAQPage = styled.View`
  height: 100%;
  width: 100%;
  padding-top: ${calculateHeight(143)}px;
  background-color: ${color.gray900};
`;

const ScrollViewContainer = styled.View`
  height: ${calculateHeight(580)}px;
  padding: 0 ${calculateHeight(20)}px;
`;

const FAQContainer = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: ${calculateHeight(8)}px;
`;

const QuestionContainer = styled.View`
  ${flex({ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' })}
  background-color: ${color.glassWhite};
  padding: ${calculateHeight(22)}px ${calculateWidth(24)}px ${calculateHeight(22)}px
    ${calculateWidth(12)}px;
  border: 1px solid ${color.glassStroke};
  border-radius: 6px;
`;

const IconContainer = styled.View<{ $rotate: boolean }>`
  transform: rotate(${(props: any) => (props.rotate ? '90deg' : '270deg')});
`;

const ContentContainer = styled.View`
  padding: ${calculateHeight(16)}px ${calculateHeight(12)}px;
  background-color: ${color.white80};
  border: 1px solid ${color.glassWhite};
  border-radius: 6px;
`;
