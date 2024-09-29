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
        <View>
          <CustomText fontType="B4" color={color.white100}>
            야간 알림
          </CustomText>
          <CustomText fontType="B6" color={color.white100}>
            (오후 12시 ~ 오전 7시)
          </CustomText>
        </View>
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
  padding: 16px 12px;
  background-color: ${color.glassWhite};
  border: 1px solid ${color.glassStroke};
  border-radius: 8px;
`;

export default Alarm;
