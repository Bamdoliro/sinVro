import Toast from 'react-native-toast-message';

const showToast = (text: string, onHide?: () => void) => {
  Toast.show({
    type: 'selectedToast',
    text1: text,
    position: 'bottom',
    visibilityTime: 3000,
    onHide,
  });
};

export default showToast;
