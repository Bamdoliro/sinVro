import { color } from '@sinabro/design-token';
import { IconWhiteArrow } from '@sinabro/icon';
import { calculateHeight, calculateWidth } from '@sinabro/util';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';

interface HeaderProps {
  onPress: () => void;
}

const Header = ({ onPress }: HeaderProps) => {
  return (
    <CustomHeader>
      <TouchableOpacity onPress={onPress}>
        <IconWhiteArrow width={23} height={17} />
      </TouchableOpacity>
    </CustomHeader>
  );
};

export default Header;

const CustomHeader = styled.View`
  background-color: ${color.gray900};
  padding-left: ${calculateWidth(29)}px;
  padding-top: ${calculateHeight(75)}px;
  z-index: 10;
`;
