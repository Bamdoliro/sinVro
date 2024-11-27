import React from 'react';
import { InputProps } from './input.type';
import { CustomText, Row } from '@sinabro/ui';
import { color, font } from '@sinabro/design-token';
import { calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';

interface TimeLimitInputProps extends InputProps {
  enabled?: boolean;
  onPress: () => void;
}

const TimeLimitInput = ({ onChange, onPress, enabled = false }: TimeLimitInputProps) => {
  return (
    <Container>
      <CustomText fontType="B5" color={color.white100}>
        인증번호
      </CustomText>
      <Row gap={8} alignItems="center">
        <StyledTimeLimitInput>
          <StyledInput
            onChangeText={onChange}
            placeholder="인증번호를 입력해주세요"
            placeholderTextColor={color.gray300}
          />
        </StyledTimeLimitInput>
        <Button onPress={onPress} enabled={enabled} disabled={enabled}>
          <CustomText fontType="B4" color={color.gray900}>
            확인
          </CustomText>
        </Button>
      </Row>
    </Container>
  );
};

export default TimeLimitInput;

const Container = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const StyledTimeLimitInput = styled.View`
  gap: 10px;
  height: 56px;
  width: ${calculateWidth(227)}px;
  background-color: ${color.white100};
  border: 1px solid ${color.gray400};
  border-radius: 6px;
`;

const StyledInput = styled.TextInput`
  ${font.B5}
  color: ${color.gray900};
  padding-left: 16px;
  width: 100%;
  height: 100%;
`;

const Button = styled.TouchableOpacity<{ enabled: boolean }>`
  width: ${calculateWidth(100)}px;
  height: 56px;
  background-color: ${(props: any) => (props.enabled ? color.gray400 : color.primary)};
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  border-radius: 6px;
  opacity: ${(props: any) => (props.enabled ? 0.6 : 1)};
`;
