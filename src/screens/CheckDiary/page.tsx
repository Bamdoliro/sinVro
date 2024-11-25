import React, { useState } from 'react';
import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { Category, Column, CustomText, Row } from '@sinabro/ui';
import { IconPad1, IconWhiteArrow } from '@sinabro/icon';
import { ScrollView } from 'react-native-gesture-handler';
import { useCharacterQuery } from 'services/character/quries';
import { useDiaryDetailQuery } from 'services/diary/quries';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/navigation';
import dayjs from 'dayjs';
import { Alert } from 'react-native';
import { useDeleteDiaryMutation } from 'services/diary/mutations';
import { StackNavigationProp } from '@react-navigation/stack';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'CheckDiary'>>();

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const diaryId = route?.params?.diaryId;
  const { data } = useCharacterQuery();
  const { data: detailData } = useDiaryDetailQuery(diaryId);
  const { deleteDiaryMutate } = useDeleteDiaryMutation(diaryId);

  const formattedDate = detailData?.createdAt
    ? dayjs(detailData.createdAt).format('YYYY년 MM월 DD일')
    : '';

  const handleDiaryClick = () => {
    if (!diaryId) {
      console.warn('Invalid diary ID');
      return;
    }
    navigation.navigate('EditDiary', { diaryId });
  };

  return (
    <StyledCheckDiaryPage
      colors={
        data?.data.type === 'HEON'
          ? [color.sinabroBlue, color.sinabroSkyBlue]
          : [color.sinabroPink, color.sinabroCream]
      }
    >
      <StyledHeader>
        <LeftIconContainer
          onPress={() => {
            navigation.navigate('Diary');
          }}
        >
          <IconWhiteArrow width={23} height={17} />
        </LeftIconContainer>
        <RightIconContainer onPress={toggleMenuOpen}>
          <Row alignItems="center" gap={3.18}>
            <Indicator />
            <Indicator />
            <Indicator />
          </Row>
        </RightIconContainer>
        {isMenuOpen && (
          <MenuListBox>
            <MenuItem onPress={handleDiaryClick}>
              <CustomText fontType="B5" color={color.gray900}>
                수정하기
              </CustomText>
            </MenuItem>
            <MenuItem
              onPress={() => {
                Alert.alert('정말로 삭제하시겠습니까?', '', [
                  {
                    text: '아니요',
                    style: 'cancel',
                  },
                  { text: '네', onPress: () => deleteDiaryMutate() },
                ]);
              }}
            >
              <CustomText fontType="B5" color={color.gray900}>
                삭제하기
              </CustomText>
            </MenuItem>
          </MenuListBox>
        )}
      </StyledHeader>
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

const StyledHeader = styled.View`
  ${flex({ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' })}
  position: absolute;
  top: ${calculateHeight(67)}px;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 10;
`;

const LeftIconContainer = styled.TouchableOpacity`
  padding: 9px;
  position: absolute;
  left: ${calculateWidth(20)}px;
`;

const RightIconContainer = styled.TouchableOpacity`
  padding: 9px;
  position: absolute;
  right: ${calculateWidth(22)}px;
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
  ${flex({ alignItems: 'flex-start', justifyContent: 'center' })};
  text-align: center;
`;

const Indicator = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background-color: ${color.white100};
`;

const MenuListBox = styled.View`
  position: absolute;
  top: 35px;
  right: ${calculateWidth(22)}px;
  width: ${calculateWidth(110)}px;
  background-color: ${color.white100};
  border-radius: 8px;
  z-index: 20;
  padding: 8px 0;
`;

const MenuItem = styled.TouchableOpacity`
  padding: 13px 8px;
  align-items: left;
`;
