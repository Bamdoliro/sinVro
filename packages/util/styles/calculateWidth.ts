import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const iPhone13MiniWidth = 375;

const calculateWidth = (baseWidth: number) =>
  (screenWidth / iPhone13MiniWidth) * baseWidth;

export default calculateWidth;
