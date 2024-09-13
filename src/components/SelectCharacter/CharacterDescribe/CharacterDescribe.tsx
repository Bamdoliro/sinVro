import styled from 'styled-components/native';
import React from 'react';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { Button, Column, CustomText } from '@sinabro/ui';
import { IconQuestion1, IconQuestion2 } from '@sinabro/icon';

interface DescribeProps {
  type: string;
  children: string;
}

const CharacterDescribe = ({ type, children }: DescribeProps) => {
  return (
    <StyledCharacterDescribe>
      <CustomText fontType="B6" color={color.primary}>
        나에게 어울리는 친구
      </CustomText>
      <Column gap={calculateHeight(10)} alignItems="center">
        <CustomText fontType="H2" color={color.gray900}>
          친구가 되어주시겠어요?
        </CustomText>
        <CenteredText fontType="B6" color={color.gray600}>
          {children}
        </CenteredText>
      </Column>
      <IconContainer>
        {type === 'heon' ? (
          <IconQuestion1 width={78} height={148} />
        ) : (
          <IconQuestion2 width={78} height={148} />
        )}
      </IconContainer>
      <Button onPress={() => {}} icon="SMALL" size="SMALL">
        선택하기
      </Button>
    </StyledCharacterDescribe>
  );
};

export default CharacterDescribe;

const StyledCharacterDescribe = styled.View<{ type: string }>`
  ${flex({ alignItems: 'center' })}
  width: 335px;
  height: 450px;
  background-color: ${color.white100};
  border-radius: 12px;
  padding: ${calculateHeight(32)}px ${calculateWidth(40)}px ${calculateHeight(27)}px
    ${calculateWidth(40)}px;
`;

const CenteredText = styled(CustomText)`
  text-align: center;
`;

const IconContainer = styled.View<{ type: string }>`
  margin-top: ${calculateHeight(59)}px;
  margin-bottom: ${calculateHeight(57)}px;
`;
