import { css } from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateWidth } from '@sinabro/util';

export const getButtonSizePadding = {
  LARGE: css`
    padding: ${calculateWidth(16)}px ${calculateWidth(120)}px;
  `,
  SMALL: css`
    padding: ${calculateWidth(12)}px ${calculateWidth(54)}px;
  `,
} as const;

export const getButtonIconPadding = {
  NONE: css`
    padding: ${calculateWidth(16)}px ${calculateWidth(120)}px;
  `,
  SMALL: css`
    padding: ${calculateWidth(12)}px ${calculateWidth(54)}px;
  `,
  BLACKARROW_ICON: css`
    gap: ${calculateWidth(12)}px;
    padding: ${calculateWidth(12)}px ${calculateWidth(44)}px ${calculateWidth(12)}px
      ${calculateWidth(44)}px;
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
    background-color: ${color.glassStroke};
    color: ${color.white100};
  `,
} as const;

export const getCompleteButtonStyle = {
  DEFAULT: css`
    padding: ${calculateWidth(16)}px ${calculateWidth(155)}px;
  `,
  DISABLED: css`
    padding: ${calculateWidth(16)}px ${calculateWidth(155)}px;
  `,
} as const;
