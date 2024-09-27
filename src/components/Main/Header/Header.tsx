import React from 'react';
import { IconWhiteBell, IconWhitePerson } from '@sinabro/icon';
import { calculateHeight, calculateWidth } from '@sinabro/util';
import styled from 'styled-components/native';
import { Row } from '@sinabro/ui';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress1: () => void;
  onPress2: () => void;
}

const Header = ({ onPress1, onPress2 }: Props) => {
  return (
    <StyledHeader>
      <StyledRow>
        <StyledTouchable onPress={onPress1}>
          <IconWhitePerson width={20} height={30} />
        </StyledTouchable>
        <StyledTouchable onPress={onPress2}>
          <IconWhiteBell width={26} height={30} />
        </StyledTouchable>
      </StyledRow>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.View`
  width: 100%;
  height: ${calculateHeight(40)}px;
  top: ${calculateHeight(60)}px;
  padding: 0 ${calculateWidth(20)}px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const StyledRow = styled(Row)`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const StyledTouchable = styled(TouchableOpacity)`
  padding: 10px;
`;
