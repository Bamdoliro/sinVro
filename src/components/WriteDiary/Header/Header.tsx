import React from 'react';
import { IconBlackArrow, IconBlackCancel } from '@sinabro/icon';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <StyledHeader>
      <LeftIconContainer onPress={() => navigation.navigate('Diary' as never)}>
        <IconBlackArrow width={23} height={17} />
      </LeftIconContainer>
      <RightIconContainer onPress={() => navigation.navigate('Main' as never)}>
        <IconBlackCancel width={18} height={23} />
      </RightIconContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.View`
  ${flex({ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' })}
  position: absolute;
  top: ${calculateHeight(67)}px;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 10;
`;

const LeftIconContainer = styled.TouchableOpacity`
  padding: 9px;
  position: absolute;
  left: ${calculateWidth(20)}px;
`;

const RightIconContainer = styled.TouchableOpacity`
  padding: 9px;
  position: absolute;
  right: ${calculateWidth(22)}px;
`;
