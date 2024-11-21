import { color } from '@sinabro/design-token';
import { Choices, CustomText, Row } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Header } from 'components/test';
import { useQuestionStore } from 'stores/test/test';
import { useCTAButton } from './question9.hooks';

interface StyledButtonProps {
  isSelected: boolean;
}

const Question9Page = () => {
  const { answers, setAnswer } = useQuestionStore();
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

  const questionId = 'question9';

  useEffect(() => {
    setSelectedValue(answers[questionId] || null);
  }, [answers, questionId]);

  const handleNextPress = () => {
    if (selectedValue === null) {
      Alert.alert('값을 선택해주세요.');
      return;
    }

    setAnswer(questionId, selectedValue);
    handleMoveNextStep();
  };

  return (
    <>
      <Header onPress={handleMovePreviousStep} />
      <StyledQuestion9Page>
        <CustomText fontType="H4" color={color.white100}>
          Q9. 지금까지 내 인생은 실패작이라는 생각이 들었다.
        </CustomText>
        <ButtonContainer>
          {[1, 2, 3, 4, 5].map((value) => (
            <StyledButton
              key={value}
              isSelected={selectedValue === value}
              onPress={() => setSelectedValue(value)}
            >
              <CustomText
                fontType="B2"
                color={selectedValue === value ? color.gray900 : color.white100}
              >
                {value}
              </CustomText>
            </StyledButton>
          ))}
        </ButtonContainer>
        <LabelContainer>
          <CustomText fontType="B5" color={color.white100}>
            매우 비동의
          </CustomText>
          <CustomText fontType="B5" color={color.white100}>
            매우 동의
          </CustomText>
        </LabelContainer>
        <Row gap={calculateWidth(15)} alignItems="center">
          <ChoicesContainer>
            <Choices onPress={handleMovePreviousStep}>이전</Choices>
          </ChoicesContainer>
          <ChoicesContainer>
            <Choices onPress={handleNextPress}>다음</Choices>
          </ChoicesContainer>
        </Row>
      </StyledQuestion9Page>
    </>
  );
};

export default Question9Page;

const StyledQuestion9Page = styled.View`
  ${flex({ alignItems: 'flex-start' })}
  padding-top: ${calculateHeight(100)}px;
  padding-left: ${calculateWidth(20)}px;
  padding-right: ${calculateWidth(20)}px;
  background-color: ${color.gray900};
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.View`
  ${flex({ justifyContent: 'space-between', flexDirection: 'row' })}
  margin-top: ${calculateHeight(266)}px;
  width: ${calculateWidth(335)}px;
`;

const StyledButton = styled(TouchableOpacity)<StyledButtonProps>`
  background-color: ${(props: any) => (props.isSelected ? color.primary : 'transparent')};
  border: 1px solid ${(props: any) => (props.isSelected ? color.primary : color.gray300)};
  border-radius: 50px;
  width: ${calculateWidth(50)}px;
  height: ${calculateHeight(50)}px;
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
`;

const LabelContainer = styled.View`
  ${flex({ justifyContent: 'space-between', flexDirection: 'row' })}
  width: 100%;
  margin-top: ${calculateHeight(16)}px;
`;

const ChoicesContainer = styled.Pressable`
  width: ${calculateWidth(160)}px;
  margin-top: ${calculateHeight(50)}px;
`;
