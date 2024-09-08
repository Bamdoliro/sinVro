import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { color } from '@sinabro/design-token';
import CustomText from '../Text/Text';
import Toast, { ToastConfig } from 'react-native-toast-message';

const toastConfig: ToastConfig = {
  selectedToast: ({ text1 }: any) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        width: 335,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        borderRadius: 8,
        backgroundColor: color.gray900,
      }}
    >
      <CustomText fontType="B5" color={color.white100}>
        {text1}
      </CustomText>
    </View>
  ),
};

const ToastPopup = () => {
  return (
    <>
      <Toast config={toastConfig} />
    </>
  );
};

export default ToastPopup;
