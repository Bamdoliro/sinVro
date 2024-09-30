import React from 'react';
import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'components/common';
import { flex } from '@sinabro/util';
import { Category, Column, CustomText, Row } from '@sinabro/ui';
import { IconPad1 } from '@sinabro/icon';
import { ScrollView } from 'react-native-gesture-handler';

const CheckDiaryPage = () => {
  return (
    <StyledCheckDiaryPage colors={[color.sinabroBlue, color.sinabroSkyBlue]}>
      <Header />
      <ContentContainer>
        <CustomText fontType="B5" color={color.white100}>
          2024년 6월 2일
        </CustomText>
        <Column alignItems="center" gap={12}>
          <CustomText fontType="H2" color={color.white100}>
            하루일기
          </CustomText>
          <Column alignItems="center" gap={16}>
            <Row alignItems="center" gap={8}>
              <Category>흐뭇한</Category>
              <Category>놀라운</Category>
              <Category>안락한</Category>
            </Row>
          </Column>
          <IconWrapper>
            <IconPad1 width={348} height={497.14} />
            <TextOverlay>
              <ScrollView>
                <CustomText fontType="B5" color={color.gray900}>
                  가야 할 때가 언제인가를 분명히 알고 가는 이의 뒷모습은 얼마나
                  아름다운가. 봄 한철 격정을 인내한 나의 사랑은 지고 있다. 분분한 낙화.[1]
                  결별이 이룩하는 축복에 싸여 지금은 가야 할 때. 무성한 녹음과 그리고
                  머지않아 열매 맺는 가을을 향하여 나의 청춘은 꽃답게 죽는다. 헤어지자
                  섬세한 손길을 흔들며 하롱하롱 꽃잎이 지는 어느 날. 나의 사랑, 나의 결별
                  샘터에 물 고이듯 성숙하는 내 영혼의 슬픈 눈.
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
  ${flex({ alignItems: 'center', justifyContent: 'center' })}; /* 중앙 정렬 */
`;

const TextOverlay = styled.View`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 26px 22px;
  ${flex({ alignItems: 'center', justifyContent: 'center' })}; /* 중앙 정렬 */
  text-align: center;
`;
