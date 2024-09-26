import React, { useState } from 'react';
import { CustomText, Toggle } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

const SettingPage = () => {
  const [onToggle, setOnToggle] = useState(true);
  const handleToggle = () => {
    setOnToggle(!onToggle);
  };

  return (
    <StyledSetting>
      <CustomText fontType="B4" color={color.white100}>
        푸시 알림
      </CustomText>
      <AlarmContainer>
        <TextContainer>
          <CustomText fontType="B4" color={color.white100}>
            야간 알림
          </CustomText>
          <CustomText fontType="B6" color={color.white100}>
            (오후 12시 ~ 오전 7시)
          </CustomText>
        </TextContainer>
        <ToggleContainer>
          <Toggle onToggle={handleToggle} isOn={onToggle}></Toggle>
        </ToggleContainer>
      </AlarmContainer>
    </StyledSetting>
  );
};

export default SettingPage;
const StyledSetting = styled.View`
  background-color: ${color.gray900};
  width: 100%;
  height: 100%;
  padding: ${calculateHeight(40)}px ${calculateWidth(20)}px ${calculateHeight(102)}px
    ${calculateWidth(20)}px;
  gap: ${calculateHeight(14)}px;
`;

const AlarmContainer = styled.View`
  position: relative;
  ${flex({ justifyContent: 'space-between' })};
  width: 100%;
  height: ${calculateHeight(77)}px;
  background-color: ${color.glassWhite};
  border: 1px solid ${color.glassStroke};
  border-radius: 8px;
`;

const TextContainer = styled.View`
  position: relative;
  ${flex({ flexDirection: 'column' })};
  padding: ${calculateHeight(16)}px ${calculateWidth(12)}px;
  border-radius: 6px;
`;

const ToggleContainer = styled.View`
  position: absolute;
  bottom: ${calculateHeight(26.5)}px;
  right: ${calculateWidth(16)}px;
`;
