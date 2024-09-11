import styled from 'styled-components/native';
import React from 'react';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { Button, Column, CustomText } from '@sinabro/ui';
import { IconQuestion1 } from '@sinabro/icon';

const CharacterDescribe = () => {
  return (
    <StyledCharacterDescribe>
      <Column gap={calculateHeight(10)}>
        <CustomText fontType="H2" color={color.gray900}>
          친구가 되어주시겠어요?
        </CustomText>
        {/* 솔이와 헌이의 문구가 다름 */}
        <CenteredText fontType="B6" color={color.gray900}>
          어떤 이유에서인지 친구가 없는 이 고양이는
          {'\n'}
          항상 외로움을 타지만 경계심이 강해요.
        </CenteredText>
      </Column>
      <IconContainer>
        {/* 솔이와 헌이의 물음표가 다름 */}
        <IconQuestion1 width={78} height={148} />
      </IconContainer>
      <Button onPress={() => {}} icon="SMALL" size="SMALL">
        선택하기
      </Button>
    </StyledCharacterDescribe>
  );
};

export default CharacterDescribe;

const StyledCharacterDescribe = styled.View`
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

const IconContainer = styled.View`
  margin-top: ${calculateHeight(59)}px;
  margin-bottom: ${calculateHeight(57)}px;
`;
