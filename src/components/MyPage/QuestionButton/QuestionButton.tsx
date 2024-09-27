import React from 'react';
import { color } from '@sinabro/design-token';
import { IconChat } from '@sinabro/icon';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
}

const QuestionButton = ({ onPress }: Props) => {
  return (
    <StyledQuestionButton onPress={onPress}>
      <IconChat width={40} height={34} />
      <CustomText fontType="B4" color={color.white100}>
        문의
      </CustomText>
    </StyledQuestionButton>
  );
};

export default QuestionButton;

const StyledQuestionButton = styled.TouchableOpacity`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(160)}px;
  height: ${calculateHeight(126)}px;
  padding-top: ${calculateHeight(10)}px;
  border: 1px solid ${color.glassStroke};
  background-color: ${color.glassWhite};
  border-radius: 6px;
  gap: ${calculateWidth(21)}px;
`;
