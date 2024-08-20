import React, { CSSProperties, ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components/native';
import CustomText from '../Text/Text';
import { flex } from '@sinabro/util';
import { ButtonIcon, ButtonSize, ButtonStyleType } from './Button.type';
import { getButtonPadding, getButtonSize, getButtonStyle } from './Button.style';
import { color } from '@sinabro/design-token';
import { IconBlackArrow } from '@sinabro/icon';
import Row from '../Flex/Row';

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
        <CustomText fontType="B4" color={color.white100}>
          {children}
        </CustomText>
        {icon === 'BLACKARROW_ICON' && <IconBlackArrow width={24} height={16} />}
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

  ${(props: Props) => props.icon !== undefined && getButtonPadding[props.icon]};
  ${(props: Props) => props.styleType !== undefined && getButtonStyle[props.styleType]};
  ${(props: Props) => props.size !== undefined && getButtonSize[props.size]};
`;
