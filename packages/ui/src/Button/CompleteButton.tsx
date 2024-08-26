import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { CompleteButtonStyleType } from './Button.type';
import styled from 'styled-components/native';
import { flex } from '@sinabro/util';
import { CustomText } from '@sinabro/ui';
import { color } from '@sinabro/design-token';
import { getCompleteButtonStyle } from './Button.style';

type Props = {
  children: ReactNode;
  onPress: () => void;
  styleType?: CompleteButtonStyleType;
  width?: CSSProperties['width'];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CompleteButton = ({
  children,
  onPress,
  styleType = 'DEFAULT',
  width,
  disabled,
}: Props) => {
  const textColor = styleType === 'DEFAULT';
  const fontColor = textColor ? color.primary : color.gray200;

  return (
    <StyledCompleteButton
      onPress={onPress}
      styleType={styleType}
      width={width}
      disabled={disabled || styleType === 'DISABLED'}
    >
      <CustomText fontType="B4" color={fontColor}>
        {children}
      </CustomText>
    </StyledCompleteButton>
  );
};

export default CompleteButton;

const StyledCompleteButton = styled.TouchableOpacity<{
  styleType: CompleteButtonStyleType;
}>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  word-break: keep-all;
  background-color: ${color.paleYellow};

  ${(props: Props) => props.styleType && getCompleteButtonStyle[props.styleType]};
`;
