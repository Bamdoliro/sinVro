import React, { useState, useEffect } from 'react';
import { color } from '@sinabro/design-token';
import { flex, showToast } from '@sinabro/util';
import { Header } from 'components/common';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { EmotionList, ExplainBox } from 'components/SelectEmotion';
import { Button, ToastPopup } from '@sinabro/ui';
import { useNavigation } from '@react-navigation/native';

const SelectEmotionPage = () => {
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (selectedDetails.length === 0 || selectedDetails.length > 2) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [selectedDetails]);

  const handlePress = () => {
    if (!isDisabled) {
      showToast('하루 일기 작성이 완료되었습니다!', () => {
        navigation.navigate('MailBox' as never);
      });
    }
  };

  const handleDetailSelect = (detail: string) => {
    setSelectedDetails((prev) =>
      prev.includes(detail) ? prev.filter((item) => item !== detail) : [...prev, detail]
    );
  };

  return (
    <StyledSelectEmotionPage colors={[color.sinabroBlue, color.sinabroSkyBlue]}>
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
