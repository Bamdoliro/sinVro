/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';
import { CustomText, Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

interface PageData {
  id: number;
  text: string;
  isSpecial?: boolean;
}

const StoryList: PageData[] = [
  {
    id: 1,
    text: '20XX년 한국계 미국인 제이크 한은 강력한 중력파 감지기를 개발하여 블랙홀을 넘어서면 30개의 행성이 존재한다는 것을 알게 되었다.',
  },
  {
    id: 2,
    text: '그 행성에 생명체가 존재한다는 사실이 밝혀지기까지는, 발견된 지 약 10년이 채 걸리지 않았다. 이 발견은 현대 천체 물리학의 패러다임을 완전히 바꾸어 놓았다.',
  },
  {
    id: 3,
    text: '이러한 발견을 한 제이크 한은 노벨 물리학상을 받게 되었고, 30여 개의 행성의 이름 앞에는 제이크 한이라는 이름이 붙게 되어, 제이크 한 #1에서 #30까지 번호가 붙게 되었다.',
  },
  {
    id: 4,
    text: '각 행성의 특성과 환경에 따라 추가적인 이름이 붙여졌지만, 공식 명칭은 여전히 제이크 한 시리즈로 불렸다.',
  },
  {
    id: 5,
    text: '그렇게 제이크 한의 노벨 물리학상 수상의 열기가 식기도 전 수많은 지구인은 제이크 한 행성들과의 교류를 원하고 있었다. ',
  },
  {
    id: 6,
    text: '사람들은 직접적인 교류를 원했지만, 블랙홀을 넘어서는 과정에서 모든 우주선이 파괴되며 수많은 생명이 희생당하였다. 그렇기에 통신하는 수준으로만 만족하였다. ',
  },
  {
    id: 7,
    text: '한편 지구와 통신을 하게 된 제이크 한 행성들에서도 지구와의 교류에 집중하고 있었다. 그중에서 첫 번째 대규모 프로젝트는 [지구에 편지를]이었다. ',
  },
  {
    id: 8,
    text: '제이크 한 행성들은 지구 문명을 뛰어넘는 문명을 이루고 있었기에 우주선을 만드는 정도는 식은 죽 먹기였으며 오히려 지구의 기술력을 능가할 정도였다. ',
  },
  {
    id: 9,
    text: "그들은 블랙홀의 강력한 중력장을 이용해 '중력 렌즈 통신'이라는 혁신적인 기술을 개발했다. ",
  },
  {
    id: 10,
    text: '이 기술력을 통해 제이크 한 행성들은 지구와의 협약을 맺고 무인 우주선을 통해 편지를 보내기로 한다.',
  },
  {
    id: 11,
    text: '블랙홀의 극한 중력을 견딜 우주선 제작 기술, 시간 왜곡 문제 해결, 그리고 블랙홀 너머의 정확한 좌표 파악 등',
  },
  {
    id: 12,
    text: '여러 난관으로 인해 지구인들의 기술력으로는 편지와 같은 물체를 보내기에는 부족함이 있었기에',
  },
  {
    id: 13,
    text: '제이크 한 행성들만이 일방적으로 편지를 보내기로 하였고, 제이크 한 행성의 거주민들이 보낸 수많은 편지는 수많은 지구인에게 도착하였다. ',
  },
  {
    id: 14,
    text: '(이 편지들은 특수 물질로 만들어져 블랙홀의 극한 환경을 견딜 수 있었고, 지구에 도착하면 자동으로 번역되는 기능을 갖추고 있었다. )',
    isSpecial: true,
  },
  {
    id: 15,
    text: '그리고 지금, 당신은 집으로 돌아오는 길에 우편함에서 편지봉투에 ‘당신의 친구로부터’라 적힌 한 통의 편지를 발견하게 된다.',
  },
];

const StoryPage = () => {
  const [step, setStep] = useState(1);

  const currentStory = StoryList.find((story) => story.id === step);

  const handleSkip = useCallback(() => {
    setStep(StoryList.length);
  }, []);

  const handlePageStep = useCallback(() => {
    if (step < StoryList.length) {
      setStep((prev) => prev + 1);
    }
  }, [step]);

  return (
    <StyledStory>
      {currentStory && (
        <CustomText
          fontType="H5"
          color={color.white100}
          style={[
            { textAlign: 'center' },
            currentStory.isSpecial ? { textDecorationLine: 'line-through' } : {},
          ]}
        >
          {currentStory.text}
        </CustomText>
      )}
      <BottomContainer>
        <BottomContainer>
          {step < StoryList.length ? (
            <>
              <CustomText fontType="B5" color={color.white80} onPress={handleSkip}>
                스킵하기
              </CustomText>
              <Button size="SMALL" icon="BLACKARROW_ICON" onPress={handlePageStep}>
                다음으로
              </Button>
            </>
          ) : (
            <Button size="SMALL" onPress={() => {}} icon="SMALL">
              시작하기
            </Button>
          )}
        </BottomContainer>
      </BottomContainer>
    </StyledStory>
  );
};

export default StoryPage;

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
