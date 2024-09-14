import React, { useState } from 'react';
import { CustomText, Choices } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

interface PageData {
  id: string;
  text: string;
}

const QuestionList: PageData[] = [
  {
    id: '1',
    text: 'Q1. 최 한달 간 주변 사람에게 “너 안 좋은일 있어? “라고 3번이상 들었다.',
  },
  {
    id: '2',
    text: 'Q2. 최근 한달 간 주변 사람에게 “너 안 좋은일 있어? “라고 3번이상 들었다.',
  },
  {
    id: '3',
    text: 'Q3. 최근 한달 간 주변 사람에게 “너 안 좋은일 있어? “라고 3번이상 들었다.',
  },
];

const IntroducePage = () => {
  const [step, setStep] = useState(1);
  const [isChoiceDisabled, setIsChoiceDisabled] = useState(false);

  const currentQuestion = QuestionList.find((question) => parseInt(question.id) === step);

  const handleNextStep = () => {
    if (step < QuestionList.length) {
      setStep(step + 1);
      setIsChoiceDisabled(false);
    }
  };

  const handleYesStep = () => {
    setIsChoiceDisabled(true);

    setTimeout(() => {
      handleNextStep();
    }, 1000);
  };

  const handleNoStep = () => {
    setIsChoiceDisabled(true);

    setTimeout(() => {
      handleNextStep();
    }, 1000);
  };

  return (
    <StyledPsychologicalQuestion>
      {currentQuestion && (
        <CustomText fontType="H4" color={color.white100}>
          {currentQuestion.text}
        </CustomText>
      )}
      <ChoicesContainer>
        <Choices onPress={handleYesStep} isDisabled={isChoiceDisabled}>
          네
        </Choices>
        <Choices onPress={handleNoStep} isDisabled={isChoiceDisabled}>
          아니요
        </Choices>
      </ChoicesContainer>
    </StyledPsychologicalQuestion>
  );
};

export default IntroducePage;

const StyledPsychologicalQuestion = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  height: 100%;
  background-color: ${color.gray900};
  padding: ${calculateHeight(192)}px ${calculateWidth(20)}px ${calculateHeight(108)}px
    ${calculateWidth(20)}px;
`;

const ChoicesContainer = styled.View`
  ${flex({ flexDirection: 'row', alignItems: 'center' })}
  gap: 16px;
`;
