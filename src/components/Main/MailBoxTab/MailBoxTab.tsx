import React from 'react';
import { color } from '@sinabro/design-token';
import { IconMailBox } from '@sinabro/icon';
import { flex } from '@sinabro/util';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
}

const MailBoxTab = ({ onPress }: Props) => {
  return (
    <StyledMailBoxTab onPress={onPress}>
      <IconMailBox width={33.73} height={32} />
    </StyledMailBoxTab>
  );
};

export default MailBoxTab;

const StyledMailBoxTab = styled(TouchableOpacity)`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 64px;
  height: 64px;
  background-color: ${color.glassWhite};
  border-radius: 999px;
  border: 1px solid ${color.glassStroke};
`;
