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
                <CustomText fontType="letterHeon" color={color.gray900}>
                  제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는
                  자를 임명한다. 국군은 국가의 안전보장과 국토방위의 신성한 의무를
                  수행함을 사명으로 하며, 그 정치적 중립성은 준수된다. 제1항의 지시를 받은
                  당해 행정기관은 이에 응하여야 한다. 교육의 자주성·전문성·정치적 중립성
                  및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 모든 국민은 법
                  앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여
                  정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지
                  아니한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및
                  교원의 지위에 관한 기본적인 사항은 법률로 정한다. 공무원의 직무상
                  불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는
                  공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은
                  면제되지 아니한다. 예비비는 총액으로 국회의 의결을 얻어야 한다. 행위로
                  손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한
                  배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다.
                  예비비는 총액으로 국회의 의결을 얻어야 한다.
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
