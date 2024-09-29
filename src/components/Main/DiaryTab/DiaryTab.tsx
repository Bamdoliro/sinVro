import React from 'react';
import { color } from '@sinabro/design-token';
import { IconNote } from '@sinabro/icon';
import { flex } from '@sinabro/util';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
}

const DiaryTab = ({ onPress }: Props) => {
  return (
    <StyledDiaryTab onPress={onPress}>
      <IconNote width={33.6} height={32} />
    </StyledDiaryTab>
  );
};

export default DiaryTab;

const StyledDiaryTab = styled(TouchableOpacity)`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  padding-left: 19px;
  padding-right: 11.4px;
  width: 64px;
  height: 64px;
  background-color: ${color.glassWhite};
  border-radius: 999px;
  border: 1px solid ${color.glassStroke};
`;
