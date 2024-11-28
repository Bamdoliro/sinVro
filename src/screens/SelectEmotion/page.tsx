import React, { useState, useEffect } from 'react';
import { color } from '@sinabro/design-token';
import { flex } from '@sinabro/util';
import { Header } from 'components/common';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { EmotionList, ExplainBox } from 'components/SelectEmotion';
import { Button, ToastPopup } from '@sinabro/ui';
import { useCharacterQuery } from 'services/character/quries';
import { useDiaryStore } from 'stores/diary/diary';
import { usePostDiaryMutate } from 'services/diary/mutations';
import Progress from 'components/WriteDiary/progress/progress';
import { Alert } from 'react-native';
import { usePostLetterMutate } from 'services/letter/mutations';

const SelectEmotionPage = () => {
  const { postDiaryMutate } = usePostDiaryMutate();
  const { data } = useCharacterQuery();
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { emotionList, content, writtenAt } = useDiaryStore();
  const { postLetterMutate } = usePostLetterMutate();

  useEffect(() => {
    setIsDisabled(emotionList.length === 0 || emotionList.length > 3);
  }, [emotionList.length, selectedDetails]);

  const handlePress = () => {
    if (!isDisabled) {
      setIsLoading(true);
      postDiaryMutate(
        { emotionList, content, writtenAt },
        {
          onSettled: () => {
            setIsLoading(false);
            postLetterMutate();
          },
          onError: () => {
            setIsLoading(false);
            Alert.alert('잠시후 다시 시도해주세요.');
          },
        }
      );
    }
  };

  const handleDetailSelect = (detail: string) => {
    setSelectedDetails((prev) =>
      prev.includes(detail) ? prev.filter((item) => item !== detail) : [...prev, detail]
    );
  };

  return (
    <>
      {isLoading && <Progress />}
      <StyledSelectEmotionPage
        colors={
          data?.data.type === 'HEON'
            ? [color.sinabroBlue, color.sinabroSkyBlue]
            : [color.sinabroPink, color.sinabroCream]
        }
      >
        <Header />
        <ContentContainer>
          <ExplainBox />
          <EmotionList
            onDetailsChange={setSelectedDetails}
            onDetailSelect={handleDetailSelect}
          />
        </ContentContainer>
        <ButtonContainer>
          <Button
            onPress={handlePress}
            styleType={isDisabled ? 'DISABLED' : 'WHITE'}
            size="LARGE"
            width={335}
          >
            선택 완료
          </Button>
        </ButtonContainer>
        <ToastPopup />
      </StyledSelectEmotionPage>
    </>
  );
};

export default SelectEmotionPage;

const StyledSelectEmotionPage = styled(LinearGradient)`
  flex: 1;
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  flex: 1;
  padding-top: 111px;
`;

const ButtonContainer = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'flex-end' })}
  width: 100%;
  padding-bottom: 63px;
`;
