import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { color } from '@sinabro/design-token';
import Row from '../Flex/Row';
import CustomText from '../Text/Text';
import { calculateHeight, calculateWidth } from '@sinabro/util';

type Props = {
  onPress: () => void;
  children: string;
  isDisabled?: boolean;
};

const Choices = ({ onPress, children, isDisabled }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handlePress = () => {
    if (isDisabled) return;
    setIsFocused(true);

    setTimeout(() => {
      setIsFocused(false);
      onPress();
    }, 1000);
  };

  return (
    <StyledButton onPress={isDisabled ? undefined : handlePress} isFocused={isFocused}>
      <Row alignItems="center" justifyContent="center">
        <CustomText fontType="B3" color={isFocused ? color.gray900 : color.white100}>
          {children}
        </CustomText>
      </Row>
    </StyledButton>
  );
};

const StyledButton = styled(Pressable)<{ isFocused: boolean }>`
  height: ${calculateHeight(200)}px;
  width: ${calculateWidth(160)}px;

  border-color: ${color.primary};
  border-width: 1px;
  border-style: solid;
  background-color: ${(props: { isFocused: any }) =>
    props.isFocused ? color.primary : 'transparent'};
  border-radius: 6px;
  justify-content: center;
`;

export default Choices;
