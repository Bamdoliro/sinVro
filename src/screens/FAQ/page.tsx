import React, { useRef } from 'react';
import { ScrollView, Animated, LayoutAnimation, UIManager, Platform } from 'react-native';
import { CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { IconInequality } from '@sinabro/icon';
import { Header } from 'components/common';
import { useFaqListQuery } from 'services/faq/quries';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQPage = () => {
  const { data: faqList } = useFaqListQuery();
  const [selectedQuestionId, setSelectedQuestionId] = React.useState<number | null>(null);
  const animatedValues = useRef(faqList.map(() => new Animated.Value(0))).current;

  const handleToggleQuestion = (id: number) => {
    const index = faqList.findIndex((question) => question.id === id);
    const isSelected = selectedQuestionId === id;

    setSelectedQuestionId(isSelected ? null : id);

    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      Animated.timing(animatedValues[index], {
        toValue: isSelected ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, 0);
  };

  return (
    <StyledFAQPage>
      <Header title="자주 묻는 질문" />
      <ScrollViewContainer>
        <ScrollView contentContainerStyle={{ paddingBottom: calculateHeight(0) }}>
          {faqList.map((question, index) => {
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
                    {question.title}
                  </CustomText>
                  <IconContainer $rotate={selectedQuestionId === question.id}>
                    <IconInequality width={11} height={20} />
                  </IconContainer>
                </QuestionContainer>
                <Animated.View style={{ height, opacity, overflow: 'hidden' }}>
                  <ContentContainer>
                    <CustomText fontType="B5" color={color.gray700}>
                      {question.content}
                    </CustomText>
                  </ContentContainer>
                </Animated.View>
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
  gap: 8px;
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
  transform: rotate(${(props: any) => (props.$rotate ? '90deg' : '270deg')});
`;

const ContentContainer = styled.View`
  padding: ${calculateHeight(16)}px ${calculateHeight(12)}px;
  background-color: ${color.white80};
  border: 1px solid ${color.glassWhite};
  border-radius: 6px;
`;
