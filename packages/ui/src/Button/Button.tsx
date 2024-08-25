import React, { CSSProperties, ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components/native';
import CustomText from '../Text/Text';
import { flex } from '@sinabro/util';
import { ButtonIcon, ButtonSize, ButtonStyleType } from './Button.type';
import {
  getButtonIconPadding,
  getButtonSizePadding,
  getButtonStyle,
} from './Button.style';
import { color } from '@sinabro/design-token';
import Row from '../Flex/Row';
import { IconBlackArrow, IconNextBlackArrow } from '@sinabro/icon';

type Props = {
  children: ReactNode;
  onPress: () => void;
  styleType?: ButtonStyleType;
  icon?: ButtonIcon;
  size?: ButtonSize;
  width?: CSSProperties['width'];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  onPress,
  styleType = 'DEFAULT',
  icon = 'NONE',
  size = 'LARGE',
  width,
  style,
  disabled,
}: Props) => {
  const isWhite = styleType === 'WHITE';
  const shouldUseBlackFont = isWhite || icon === 'BLACKARROW_ICON' || size === 'SMALL';
  const fontColor = shouldUseBlackFont ? color.gray900 : color.white100;
  const fontType = size === 'LARGE' ? 'B4' : 'B5';

  return (
    <StyledButton
      onPress={onPress}
      style={{ width, ...style }}
      styleType={styleType}
      icon={icon}
      size={size}
      disabled={disabled || styleType === 'DISABLED'}
    >
      <Row alignItems="center">
        <CustomText fontType={fontType} color={fontColor}>
          {children}
        </CustomText>
        {icon === 'BLACKARROW_ICON' && <IconNextBlackArrow width={24} height={16} />}
      </Row>
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.TouchableOpacity<{
  styleType: ButtonStyleType;
  icon: ButtonIcon;
  size: ButtonSize;
}>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  border-radius: 6px;
  word-break: keep-all;

  ${(props: Props) => props.size && getButtonSizePadding[props.size]};
  ${(props: Props) => props.icon && getButtonIconPadding[props.icon]};
  ${(props: Props) => props.styleType && getButtonStyle[props.styleType]};
`;
