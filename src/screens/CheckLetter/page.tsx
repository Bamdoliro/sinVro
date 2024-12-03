import { RouteProp } from '@react-navigation/native';
import { color } from '@sinabro/design-token';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Header } from 'components/common';
import { flex } from '@sinabro/util';
import { Column, CustomText } from '@sinabro/ui';
import { IconPad2 } from '@sinabro/icon';
import { ScrollView } from 'react-native-gesture-handler';
import { useCharacterQuery } from 'services/character/quries';
import { useLetterDetailQuery } from 'services/letter/quries';
import dayjs from 'dayjs';
import { RootStackParamList } from 'navigation/navigationType';
import React from 'react';

type CheckLetterPageRouteProp = RouteProp<RootStackParamList, 'CheckLetter'>;

const CheckLetterPage = ({ route }: { route: CheckLetterPageRouteProp }) => {
  const { data } = useCharacterQuery();
  const letterId = route.params.letterId;
  const { data: letterData } = useLetterDetailQuery(letterId);

  const formattedDate = letterData?.createdAt
    ? dayjs(letterData.createdAt).format('YYYY년 MM월 DD일')
    : '';

  return (
    <StyledCheckLetterPage
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
        <Column gap={32} alignItems="center">
          <CustomText fontType="H2" color={color.white100}>
            {data?.data.type === 'HEON' ? '헌' : '솔'}이로부터 도착한 편지
          </CustomText>
          <IconWrapper>
            <IconPad2 width={348} height={493} />
            <TextOverlay>
              <ScrollView>
                <CustomText
                  fontType={data?.data.type === 'HEON' ? 'letterHeon' : 'letterSol'}
                  color={color.gray900}
                >
                  {letterData?.content}
                </CustomText>
              </ScrollView>
            </TextOverlay>
          </IconWrapper>
        </Column>
      </ContentContainer>
    </StyledCheckLetterPage>
  );
};

export default CheckLetterPage;

const StyledCheckLetterPage = styled(LinearGradient)`
  flex: 1;
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  top: 87px;
  bottom: 66px;
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
  padding: 21px 16px;
  ${flex({ alignItems: 'flex-start', justifyContent: 'center' })};
  text-align: center;
`;
