import React from 'react';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { Button, Column, CustomText } from '@sinabro/ui';
import { IconQuestion1, IconQuestion2 } from '@sinabro/icon';
import { useNavigation } from '@react-navigation/native';
import { useQuestionStore } from 'stores/test/test';

interface DescribeProps {
  type: string;
  children: string;
}

const CharacterDescribe = ({ type, children }: DescribeProps) => {
  const navigation = useNavigation();
  const getTotal = useQuestionStore((state) => state.getTotal);
  const totalScore = getTotal();

  const recommendedType = totalScore >= 50 ? 'heon' : 'sol';
  const isRecommended = type === recommendedType;

  return (
    <StyledCharacterDescribe>
      {isRecommended ? (
        <CustomText fontType="B6" color={color.primary}>
          나에게 어울리는 친구
        </CustomText>
      ) : (
        <Column height={18}>
          <CustomText fontType="B6" color={color.glassDark}>
            {' '}
          </CustomText>
        </Column>
      )}
      <Column gap={calculateHeight(10)} alignItems="center">
        <CustomText fontType="H2" color={color.gray900}>
          친구가 되어주시겠어요?
        </CustomText>
        <CenteredText fontType="B6" color={color.gray600}>
          {children}
        </CenteredText>
      </Column>
      {type === 'heon' ? (
        <IconHeonContainer>
          <IconQuestion1 width={calculateWidth(78)} height={calculateHeight(148)} />
        </IconHeonContainer>
      ) : (
        <IconSolContainer>
          <IconQuestion2 width={calculateWidth(78)} height={calculateHeight(148)} />
        </IconSolContainer>
      )}
      <Button
        onPress={() => {
          navigation.navigate('Story' as never);
        }}
        icon="SMALL"
        size="SMALL"
      >
        선택하기
      </Button>
    </StyledCharacterDescribe>
  );
};

export default CharacterDescribe;

const StyledCharacterDescribe = styled.View`
  ${flex({ alignItems: 'center' })}
  width: ${calculateWidth(335)}px;
  height: ${calculateHeight(450)}px;
  background-color: ${color.white100};
  border-radius: 12px;
  padding: ${calculateHeight(32)}px ${calculateWidth(40)}px ${calculateHeight(27)}px
    ${calculateWidth(40)}px;
`;

const CenteredText = styled(CustomText)`
  text-align: center;
`;

const IconHeonContainer = styled.View`
  margin-top: ${calculateHeight(40)}px;
  margin-bottom: ${calculateHeight(57)}px;
`;

const IconSolContainer = styled.View`
  margin-top: ${calculateHeight(21)}px;
  margin-bottom: ${calculateHeight(57)}px;
`;
