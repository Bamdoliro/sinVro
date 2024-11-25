import { color } from '@sinabro/design-token';
import { IconCompleteHeon, IconCompleteSol } from '@sinabro/icon';
import { calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import React, { useState, useEffect } from 'react';
import { Column, CustomText } from '@sinabro/ui';
import { useCharacterQuery } from 'services/character/quries';

const Progress = () => {
  const { data } = useCharacterQuery();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    };

    const interval = setInterval(updateProgress, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledProgressPage>
      <StyledProgress>
        <Column gap={40} alignItems="center">
          {data?.data.type === 'HEON' ? (
            <IconCompleteHeon width={152.88} height={150} />
          ) : (
            <IconCompleteSol width={143.33} height={150} />
          )}
          <Column gap={4} alignItems="center">
            <CustomText fontType="B3" color={color.gray900}>
              일기 작성을 완료하는 중입니다
            </CustomText>
            <CustomText fontType="B6" color={color.gray600}>
              잠시만 기다려주세요...
            </CustomText>
          </Column>
          <StyledProgressBarContainer>
            <StyledProgressBar>
              <StyledProgressFill progress={progress} />
            </StyledProgressBar>
          </StyledProgressBarContainer>
        </Column>
      </StyledProgress>
    </StyledProgressPage>
  );
};

export default Progress;

const StyledProgressPage = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  background-color: ${color.white100};
`;

const StyledProgress = styled.View`
  ${flex({ alignItems: 'center' })}
  padding-top: 192px;
`;

const StyledProgressBarContainer = styled.View`
  width: ${calculateWidth(260)}px;
  height: 20px;
  background-color: ${color.white100};
  border: 1px solid #000000;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledProgressBar = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${color.white100};
`;

const StyledProgressFill = styled.View<{ progress: number }>`
  width: ${({ progress }: any) => progress}%;
  height: 100%;
  background-color: ${color.primary};
  transition: width 0.1s ease-in-out;
`;
