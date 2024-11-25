import React from 'react';
import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'components/common';
import { flex } from '@sinabro/util';
import { Category, Column, CustomText, Row } from '@sinabro/ui';
import { IconPad1 } from '@sinabro/icon';
import { ScrollView } from 'react-native-gesture-handler';
import { useCharacterQuery } from 'services/character/quries';
import { useDiaryDetailQuery } from 'services/diary/quries';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/navigation';
import dayjs from 'dayjs';

type CheckDiaryPageRouteProp = RouteProp<RootStackParamList, 'CheckDiary'>;

const emotionMap: { [key: string]: string } = {
  FRUITFUL: '보람찬',
  CALM: '안정된',
  HOPELESS: '절망스러운',
  FURIOUS: '분한',
  AMAZED: '놀라운',
  COMFORTABLE: '안락한',
  PUZZELD: '의아한',
  ENRAGED: '울화통 터지는',
  REGRETFUL: '아쉬운',
  DEDICATED: '헌신적인',
  PEACEFUL: '평화로운',
  EMBARRASSED: '당혹스러운',
  DISAPPOINTED: '섭섭한',
  GLOOMY: '시무룩한',
  IMPRESSED: '감탄한',
  PROUD: '뿌듯한',
  EXCITED: '설레는',
  ASTOUNDED: '경악한',
  UPSET: '속상한',
  IRRITATED: '짜증나는',
  POUNDING: '두근거리는',
  VAIN: '허무한',
  ECSTATIC: '황홀한',
  BITTER: '떨떠름한',
};

const CheckDiaryPage = ({ route }: { route: CheckDiaryPageRouteProp }) => {
  const diaryId = route?.params?.diaryId;
  const { data } = useCharacterQuery();
  const { data: detailData } = useDiaryDetailQuery(diaryId);

  const formattedDate = detailData?.createdAt
    ? dayjs(detailData.createdAt).format('YYYY년MM월DD일')
    : '';
  return (
    <StyledCheckDiaryPage
      colors={
        data?.data.type === 'HEON'
          ? [color.sinabroBlue, color.sinabroSkyBlue]
          : [color.sinabroPink, color.sinabroCream]
      }
    >
      <Header />
      <ContentContainer>
        <CustomText fontType="B5" color={color.white100}>
          {formattedDate}
        </CustomText>
        <Column alignItems="center" gap={12}>
          <CustomText fontType="H2" color={color.white100}>
            하루일기
          </CustomText>
          <Column alignItems="center" gap={16}>
            <Row alignItems="center" gap={8}>
              {detailData?.emotionList.map((emotion) => (
                <Category key={emotion}>{emotionMap[emotion] || emotion}</Category>
              ))}
            </Row>
          </Column>
          <IconWrapper>
            <IconPad1 width={348} height={497.14} />
            <TextOverlay>
              <ScrollView>
                <CustomText fontType="cursive2" color={color.gray900}>
                  {detailData?.content}
                </CustomText>
              </ScrollView>
            </TextOverlay>
          </IconWrapper>
        </Column>
      </ContentContainer>
    </StyledCheckDiaryPage>
  );
};

export default CheckDiaryPage;

const StyledCheckDiaryPage = styled(LinearGradient)`
  flex: 1;
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  top: 87px;
`;

const IconWrapper = styled.View`
  position: relative;
  width: 348px;
  height: 497.14px;
  ${flex({ alignItems: 'center', justifyContent: 'center' })};
`;

const TextOverlay = styled.View`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 26px 22px;
  ${flex({ alignItems: 'left', justifyContent: 'center' })};
  text-align: center;
`;
