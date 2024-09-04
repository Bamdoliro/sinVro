import { font } from '@sinabro/design-token';
import { ReactNode } from 'react';
import { TextProps, Text, TextStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

type Font = keyof typeof font;

interface Props extends Omit<TextProps, 'style'> {
  children: ReactNode;
  color?: string;
  width?: number;
  ellipsis?: boolean;
  style?: TextStyle | TextStyle[];
}

const Toast = ({
  children,
  ellipsis = false,
  style,
  ...rest
}: Props) => {
  return <>{children}</>;
};

export default Toast;
