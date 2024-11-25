import React, { useState, useEffect } from 'react';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { EmotionList, ExplainBox } from 'components/SelectEmotion';
import { Button, ToastPopup } from '@sinabro/ui';
import { useCharacterQuery } from 'services/character/quries';
import { useDiaryStore } from 'stores/diary/diary';
import { useDiaryEditMutation } from 'services/diary/mutations';
import Progress from 'components/WriteDiary/progress/progress';
import { IconWhiteArrow } from '@sinabro/icon';
import { useSetDiaryStep } from 'stores/diary/diaryStep';
import { useDiaryDetailQuery } from 'services/diary/quries';
import { RouteProp } from '@react-navigation/native';
import { Alert } from 'react-native';
import { RootStackParamList } from 'navigation/navigationType';

type CheckDiaryPageRouteProp = RouteProp<RootStackParamList, 'EditDiary'>;

const EditSelectEmotionPage = ({ route }: { route: CheckDiaryPageRouteProp }) => {
  const diaryId = route.params.diaryId;
  const { data: diaryData } = useDiaryDetailQuery(diaryId);
  const setDiaryStep = useSetDiaryStep();

  const { editDiaryMutate } = useDiaryEditMutation(diaryId);

  const { data } = useCharacterQuery();
  const { emotionList, content, writtenAt, setEmotionList } = useDiaryStore();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (diaryData?.emotionList) {
      setEmotionList(diaryData.emotionList);
    }
  }, [diaryData, setEmotionList]);

  useEffect(() => {
    setIsDisabled(emotionList.length === 0 || emotionList.length > 3);
  }, [emotionList]);

  const handlePress = () => {
    if (!isDisabled) {
      setIsLoading(true);
      editDiaryMutate(
        { emotionList, content, writtenAt },
        {
          onSettled: () => {
            setIsLoading(false);
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
    const newEmotionList = emotionList.includes(detail)
      ? emotionList.filter((item) => item !== detail)
      : [...emotionList, detail];

    setEmotionList(newEmotionList);
  };

  const handlePressBack = () => {
    setDiaryStep('일기');
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
        <StyledHeader>
          <IconContainer onPress={handlePressBack}>
            <IconWhiteArrow width={23} height={17} />
          </IconContainer>
        </StyledHeader>
        <ContentContainer>
          <ExplainBox />
          <EmotionList
            onDetailsChange={setEmotionList}
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

export default EditSelectEmotionPage;

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

const StyledHeader = styled.View`
  position: absolute;
  top: ${calculateHeight(67)}px;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 10;
`;

const IconContainer = styled.TouchableOpacity`
  padding: 9px;
  position: absolute;
  left: ${calculateWidth(20)}px;
  z-index: 1;
`;
