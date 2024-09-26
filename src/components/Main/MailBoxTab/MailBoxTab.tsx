import React from 'react';
import { color } from '@sinabro/design-token';
import { IconMailBox } from '@sinabro/icon';
import { flex } from '@sinabro/util';
import styled from 'styled-components/native';

const MailBoxTab = () => {
  return (
    <StyledMailBoxTab onPress={() => {}}>
      <IconMailBox width={33.73} height={32} />
    </StyledMailBoxTab>
  );
};

export default MailBoxTab;

const StyledMailBoxTab = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 64px;
  height: 64px;
  background-color: ${color.glassWhite};
  border-radius: 999px;
  border: 1px solid ${color.glassStroke};
`;
