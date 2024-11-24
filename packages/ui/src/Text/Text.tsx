import { font } from '@sinabro/design-token';
import { ReactNode } from 'react';
import { TextProps, TextStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

type Font = keyof typeof font;

interface Props extends Omit<TextProps, 'style'> {
  children: ReactNode;
  color?: string;
  fontType: Font;
  width?: number;
  ellipsis?: boolean;
  style?: TextStyle | TextStyle[];
}

const CustomText = ({
  children,
  color,
  fontType,
  width,
  ellipsis = false,
  style,
  ...rest
}: Props) => {
  return (
    <StyledText
      style={[{ color, width }, style]}
      fontType={fontType}
      ellipsis={ellipsis}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default CustomText;

const StyledText = styled.Text<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => font[fontType]}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
