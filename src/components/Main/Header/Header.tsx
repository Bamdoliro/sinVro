import { IconWhiteBell, IconWhitePerson } from '@sinabro/icon';
import { calculateHeight, calculateWidth } from '@sinabro/util';
import styled from 'styled-components/native';
import React from 'react';
import { Row } from '@sinabro/ui';
import { TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <StyledHeader>
      <StyledRow>
        <StyledTouchable onPress={() => {}}>
          <IconWhitePerson width={20} height={30} />
        </StyledTouchable>
        <StyledTouchable onPress={() => {}}>
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
`;

const StyledRow = styled(Row)`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const StyledTouchable = styled(TouchableOpacity)`
  padding: 10px;
`;
