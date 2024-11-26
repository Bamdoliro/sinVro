import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { color } from '@sinabro/design-token';
import { CustomText, Toggle } from '@sinabro/ui';
import styled from 'styled-components/native';
import { flex } from '@sinabro/util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useDeleteFcmTokenMutation,
  usePostFcmTokenMutation,
} from 'services/fcm/mutations';
import { Storage } from 'apis/storage/storage';
import { TOKEN } from 'constants/common/contant';

const ALARM_KEY = 'alarmToggleState';

const Alarm = () => {
  const { postFacmTokenMutate } = usePostFcmTokenMutation();
  const { deleteFcmTokenMutate } = useDeleteFcmTokenMutation();
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    const loadToggleState = async () => {
      const savedState = await AsyncStorage.getItem(ALARM_KEY);
      if (savedState !== null) {
        setIsOn(JSON.parse(savedState));
      }
    };

    loadToggleState();
  }, []);

  const handleToggle = async () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);

    await Storage.setItem(ALARM_KEY, JSON.stringify(newIsOn));
    const token = await Storage.getItem(TOKEN.FCM);

    if (newIsOn) {
      postFacmTokenMutate(token);
    } else {
      deleteFcmTokenMutate(token);
    }
  };

  return (
    <StyledAlarm>
      <CustomText fontType="B4" color={color.white100}>
        푸시 알림
      </CustomText>
      <AlarmBox>
        <CustomText fontType="B4" color={color.white100}>
          알림 수신
        </CustomText>
        <Toggle onToggle={handleToggle} isOn={isOn} />
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
