import { css } from 'styled-components/native';
import { color } from '@sinabro/design-token';

export const getButtonPadding = {
  NONE: css`
    padding: 16px 120px;
  `,
  BLACKARROW_ICON: css`
    gap: 12px;
    padding: 16px 120px;
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

export const getButtonSize = {
  LARGE: css`
    height: 56px;
  `,
  SMALL: css`
    height: 46px;
  `,
} as const;
