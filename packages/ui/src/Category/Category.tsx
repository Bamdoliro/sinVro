import { color } from '@sinabro/design-token';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import CustomText from '../Text/Text';
import { ReactNode } from 'react';
import { calculateWidth } from '@sinabro/util';

interface Props {
  children: ReactNode;
}

const Category = ({ children }: Props) => {
  return (
    <StyledCategory>
      <CustomText fontType="B5" color={color.white100}>
        {children}
      </CustomText>
    </StyledCategory>
  );
};

export default Category;

const StyledCategory = styled(View)`
  padding-left: ${calculateWidth(10)}px;
  padding-right: ${calculateWidth(10)}px;
  width: auto;
  height: 38px;
  border-radius: 6px;
  background-color: ${color.glassWhite};
  border: 2px solid ${color.glassStroke};
  align-items: center;
  justify-content: center;
`;
