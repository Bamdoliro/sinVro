import { color } from '@sinabro/design-token';
import { IconSetting } from '@sinabro/icon';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
}

const SettingButton = ({ onPress }: Props) => {
  return (
    <StyledSettingButton onPress={onPress}>
      <IconSetting width={40} height={41} />
      <CustomText fontType="B4" color={color.white100}>
        설정
      </CustomText>
    </StyledSettingButton>
  );
};

export default SettingButton;

const StyledSettingButton = styled.TouchableOpacity`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(160)}px;
  height: ${calculateHeight(126)}px;
  padding-top: ${calculateHeight(10)}px;
  border: 1px solid ${color.glassStroke};
  background-color: ${color.glassWhite};
  border-radius: 6px;
  gap: ${calculateWidth(16)}px;
`;
