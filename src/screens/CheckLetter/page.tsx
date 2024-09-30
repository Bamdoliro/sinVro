import React from 'react';
import { color } from '@sinabro/design-token';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Header } from 'components/common';
import { flex } from '@sinabro/util';
import { Column, CustomText } from '@sinabro/ui';
import { IconPad2 } from '@sinabro/icon';
import { ScrollView } from 'react-native-gesture-handler';

const CheckLetterPage = () => {
  return (
    <StyledCheckLetterPage colors={[color.sinabroBlue, color.sinabroSkyBlue]}>
      <Header />
      <ContentContainer>
        <CustomText fontType="B5" color={color.white100}>
          2024년 6월 2일
        </CustomText>
        <Column gap={32} alignItems="center">
          <CustomText fontType="H2" color={color.white100}>
            헌이로부터 도착한 편지
          </CustomText>
          <IconWrapper>
            <IconPad2 width={348} height={493} />
            <TextOverlay>
              <ScrollView>
                <CustomText fontType="cursive2" color={color.gray900}>
                  가야 할 때가 언제인가를 분명히 알고 가는 이의 뒷모습은 얼마나
                  아름다운가. 봄 한철 격정을 인내한 나의 사랑은 지고 있다. 분분한 낙화.
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
  ${flex({ alignItems: 'center', justifyContent: 'center' })}; /* 중앙 정렬 */
`;

const TextOverlay = styled.View`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 21px 16px;
  ${flex({ alignItems: 'center', justifyContent: 'center' })}; /* 중앙 정렬 */
  text-align: center;
`;
