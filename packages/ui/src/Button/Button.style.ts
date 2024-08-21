import { css } from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const iPhone13MiniWidth = 375;

const calculatePadding = (basePadding: number) => {
  return (screenWidth / iPhone13MiniWidth) * basePadding;
};

export const getButtonSizePadding = {
  LARGE: css`
    padding: ${calculatePadding(16)}px ${calculatePadding(120)}px;
  `,
  SMALL: css`
    padding: ${calculatePadding(12)}px ${calculatePadding(54)}px;
  `,
} as const;

export const getButtonIconPadding = {
  NONE: css`
    padding: ${calculatePadding(16)}px ${calculatePadding(120)}px;
  `,
  SMALL: css`
    padding: ${calculatePadding(12)}px ${calculatePadding(54)}px;
  `,
  BLACKARROW_ICON: css`
    gap: ${calculatePadding(12)}px;
    padding: ${calculatePadding(12)}px ${calculatePadding(44)}px ${calculatePadding(12)}px ${calculatePadding(44)}px;
  `,
} as const;

export const getButtonStyle = {
  DEFAULT: css`
    background-color: ${color.primary};
    color: ${color.white100};
  `,
  WHITE: css`
    background-color: ${color.white100};
    color: ${color.gray900};
  `,
  DISABLED: css`
    background-color: ${color.gray200};
    color: ${color.white100};
  `,
  GLASS: css`
    background-color: ${color.glass_stroke};
    color: ${color.white100};
  `,
} as const;
