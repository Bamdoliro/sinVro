import { Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');
const iPhone13MiniHeight = 780;

const calculateHeight = (baseHeight: number) =>
  (screenHeight / iPhone13MiniHeight) * baseHeight;

export default calculateHeight;
