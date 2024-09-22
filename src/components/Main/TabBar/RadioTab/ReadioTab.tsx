import React from 'react';
import { color } from '@sinabro/design-token';
import { flex } from '@sinabro/util';
import styled from 'styled-components/native';
import { IconRadio } from '@sinabro/icon';

const RadioTab = () => {
  return (
    <StyledRadioTab onPress={() => {}}>
      <IconRadio width={36} height={40} />
    </StyledRadioTab>
  );
};

export default RadioTab;

const StyledRadioTab = styled.TouchableOpacity`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 64px;
  height: 64px;
  background-color: ${color.glassWhite};
  border-radius: 999px;
  border: 1px solid ${color.glassStroke};
`;
