import { useState } from 'react';
import { CustomText, Input, Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, flex } from '@sinabro/util';

const NamePage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleEnterPress = () => {
    setIsButtonVisible(true);
  };

  return (
    <NameContainer>
      <InputContainer>
        <CustomText fontType="H4" color={color.white100}>
          당신의 이름을 알려주세요.
        </CustomText>
        <Input
          onChange={() => {}}
          onSubmit={handleEnterPress}
          placeholder="이름을 입력해주세요"
        />
      </InputContainer>
      {isButtonVisible && (
        <ButtonContainer>
          <Button size="SMALL" icon="BLACKARROW_ICON" onPress={() => {}}>
            다음으로
          </Button>
        </ButtonContainer>
      )}
    </NameContainer>
  );
};

const NameContainer = styled.View`
  background-color: ${color.gray900};
  width: 100%;
  height: 100%;
  gap: ${calculateHeight(320)}px;
`;

const InputContainer = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'flex-start' })}
  padding-top: ${calculateHeight(224)}px;
  text-align: center;
  gap: 16px;
`;

const ButtonContainer = styled.View`
  ${flex({ alignItems: 'center' })}
`;

export default NamePage;
