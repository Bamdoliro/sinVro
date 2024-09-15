import React, { useState } from 'react';
import { CustomText, Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import PsychologicalQuestions from 'components/PsychologicalTest/PsychologicalQuestions/PsychologicalQuestions';
import { IconCheck } from '@sinabro/icon';

interface PageData {
  id: string;
  text: string;
}

const PageList: PageData[] = [
  {
    id: '1',
    text: '박강원 님의 비밀친구를 만나기 위해선\n짧은 심리테스트를 하셔야해요.',
  },
  {
    id: '3',
    text: '설문에 답하시느라 고생 많으셨어요.\n박강원 님의 비밀친구를\n만나볼 시간이에요.',
  },
];

const DescriptionList: PageData[] = [
  { id: '1', text: 'n 문항' },
  { id: '2', text: '약 n분 소요' },
  {
    id: '3',
    text: '결과는 심리 치유 목적으로만 사용',
  },
];

const PsychologicalTest = () => {
  const [step, setStep] = useState(1);
  const currentPage = PageList.find((page) => parseInt(page.id) === step);

  const handlePageStep = () => {
    if (step < PageList.length+1) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      {step === 2 ? (
        <PsychologicalQuestions onSubmit={handlePageStep} />
      ) : (
        <StyledPsychologicalTest>
          <TextContainer>
            {currentPage && (
              <CustomText
                fontType="H4"
                color={color.white100}
                style={{ textAlign: 'center' }}
              >
                {currentPage.text}
              </CustomText>
            )}
            {step === 1 && (
              <DescriptionContainer>
                {DescriptionList.map((desc) => (
                  <CheckListContainer key={desc.id}>
                    <IconCheck width={26} height={20} />
                    <CustomText key={desc.id} fontType="B5" color={color.white100}>
                      {desc.text}
                    </CustomText>
                  </CheckListContainer>
                ))}
              </DescriptionContainer>
            )}
          </TextContainer>
          <Button size="SMALL" icon="BLACKARROW_ICON" onPress={handlePageStep}>
            다음으로
          </Button>
        </StyledPsychologicalTest>
      )}
    </>
  );
};

export default PsychologicalTest;

const StyledPsychologicalTest = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  height: 100%;
  background-color: ${color.gray900};
  padding: ${calculateHeight(192)}px ${calculateWidth(20)}px ${calculateHeight(112)}px
    ${calculateWidth(20)}px;
`;

const TextContainer = styled.View`
  gap: 56px;
`;

const DescriptionContainer = styled.View`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' })}
  margin-top: ${calculateHeight(20)}px;
`;

const CheckListContainer = styled.View`
  ${flex({ flexDirection: 'row', alignItems: 'center' })}
  margin-bottom: ${calculateHeight(10)}px;
  gap: 16px;
`;
