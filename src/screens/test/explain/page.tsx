import { color } from '@sinabro/design-token';
import { Button, Column, CustomText, Row } from '@sinabro/ui';
import styled from 'styled-components/native';
import React from 'react';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { IconCheck } from '@sinabro/icon';
import { useCTAButton } from './explain.hooks';
import { useUserQuery } from 'services/user/quries';

const ExplainPage = () => {
  const { handleMoveNextStep } = useCTAButton();
  const { data } = useUserQuery();

  return (
    <StyledExplainPage>
      <Column alignItems="center" gap={calculateHeight(218)}>
        <Column alignItems="flex-start" gap={calculateHeight(56)}>
          <CustomText
            fontType="H4"
            color={color.white100}
            style={{ textAlign: 'center' }}
          >
            {data?.name} 님의 비밀친구를 만나기 위해선{'\n'}짧은 심리테스트를 하셔야해요.
          </CustomText>
          <Column gap={16} alignItems="flex-start">
            <Row alignItems="center" gap={calculateWidth(16)}>
              <IconCheck width={calculateWidth(26)} height={calculateHeight(20)} />
              <CustomText fontType="B5" color={color.white100}>
                n 문항
              </CustomText>
            </Row>
            <Row alignItems="center" gap={calculateWidth(16)}>
              <IconCheck width={calculateWidth(26)} height={calculateHeight(20)} />
              <CustomText fontType="B5" color={color.white100}>
                약 n분 소요
              </CustomText>
            </Row>
            <Row alignItems="center" gap={calculateWidth(16)}>
              <IconCheck width={calculateWidth(26)} height={calculateHeight(20)} />
              <CustomText fontType="B5" color={color.white100}>
                1에서 5까지의 수치 중 선택
              </CustomText>
            </Row>
            <Row alignItems="center" gap={calculateWidth(16)}>
              <IconCheck width={calculateWidth(26)} height={calculateHeight(20)} />
              <CustomText fontType="B5" color={color.white100}>
                결과는 심리 치유 목적으로만 사용
              </CustomText>
            </Row>
          </Column>
        </Column>
        <Button
          size="SMALL"
          width={calculateWidth(160)}
          icon="BLACKARROW_ICON"
          onPress={handleMoveNextStep}
        >
          다음으로
        </Button>
      </Column>
    </StyledExplainPage>
  );
};

export default ExplainPage;

const StyledExplainPage = styled.View`
  ${flex({ alignItems: 'center' })}
  padding-top: ${calculateHeight(191)}px;
  background-color: ${color.gray900};
  width: 100%;
  height: 100%;
`;
