import React, { useState } from 'react';
import { CustomText, Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

interface PageData {
  id: string;
  text: string;
}

const StoryList: PageData[] = [
  {
    id: '1',
    text: '20XX년 한국계 미국인 제이크 한은 강력한 중력파 감지기를 개발하여 블랙홀을 넘어서면 30여 개의 행성이 존재한다는 것을 알게 되었고,',
  },
  {
    id: '2',
    text: '그 행성에 생명체들이 산다는 사실까지 밝혀지기까지는 제이크 한이 30여 개의 행성이 존재한다는 걸 알게 된 지 약 10년도 채 걸리지 않았다. 이 발견은 현대 천체 물리학의 패러다임을 완전히 바꾸어 놓았다.',
  },
  {
    id: '3',
    text: '그 행성에 생명체들이 산다는 사실까지 밝혀지기까지는 제이크 한이 30여 개의 행성이 존재한다는 걸 알게 된 지 약 10년도 채 걸리지 않았다. 이 발견은 현대 천체 물리학의 패러다임을 완전히 바꾸어 놓았다.',
  },
];

const Story = () => {
  const [step, setStep] = useState(1);

  const currentStory = StoryList.find((story) => parseInt(story.id) === step);

  const handleSkip = () => {
    setStep(3);
  };

  const handlePageStep = () => {
    if (step < StoryList.length + 1) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <StyledStory>
      {currentStory && (
        <CustomText fontType="H5" color={color.white100}>
          {currentStory.text}
        </CustomText>
      )}
      <BottomContainer>
        <CustomText fontType="B5" color={color.white80} onPress={handleSkip}>
          스킵하기
        </CustomText>
        <Button size="SMALL" icon="BLACKARROW_ICON" onPress={handlePageStep}>
          다음으로
        </Button>
      </BottomContainer>
    </StyledStory>
  );
};

export default Story;

const StyledStory = styled.View`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  height: 100%;
  background-color: ${color.gray900};
  padding: ${calculateHeight(244)}px ${calculateWidth(20)}px ${calculateHeight(102)}px
    ${calculateWidth(20)}px;
`;

const BottomContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  gap: 16px;
`;
