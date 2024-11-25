import React, { useState } from 'react';
import { View } from 'react-native';
import { color } from '@sinabro/design-token';
import { CustomText, Toggle } from '@sinabro/ui';
import styled from 'styled-components/native';
import { flex } from '@sinabro/util';

const Alarm = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <StyledAlarm>
      <CustomText fontType="B4" color={color.white100}>
        푸시 알림
      </CustomText>
      <AlarmBox>
        <CustomText fontType="B4" color={color.white100}>
          알림 수신
        </CustomText>
        <Toggle onToggle={() => setIsOn(!isOn)} isOn={isOn} />
      </AlarmBox>
    </StyledAlarm>
  );
};

const StyledAlarm = styled(View)`
  padding: 0 20px;
  gap: 14px;
`;

const AlarmBox = styled(View)`
  ${flex({ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' })}
  padding: 25.5px 16px;
  background-color: ${color.glassWhite};
  border: 1px solid ${color.glassStroke};
  border-radius: 8px;
`;

export default Alarm;
