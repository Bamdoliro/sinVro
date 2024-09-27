import React from 'react';
import { color } from '@sinabro/design-token';
import { IconQuestionRed } from '@sinabro/icon';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
}

const FAQButton = ({ onPress }: Props) => {
  return (
    <FAQContainer onPress={onPress}>
      <IconQuestionRed width={26} height={40} />
      <CustomText fontType="B4" color={color.white100}>
        자주 묻는 질문
      </CustomText>
    </FAQContainer>
  );
};

export default FAQButton;

const FAQContainer = styled.TouchableOpacity`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(336)}px;
  height: ${calculateHeight(84)}px;
  border: 1px solid ${color.glassStroke};
  background-color: ${color.glassWhite};
  border-radius: 6px;
  gap: ${calculateWidth(139)}px;
`;
