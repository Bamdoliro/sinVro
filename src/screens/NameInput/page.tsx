import React, { useState } from 'react';
import { CustomText, Input, Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, flex } from '@sinabro/util';
import { useNavigation } from '@react-navigation/native';
import { useNameStore } from '@sinabro/util';

const NamePage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const { setName } = useNameStore();
  const navigation = useNavigation();

  const handleInputChange = (text: string) => {
    setNameInput(text);
  };

  const handlePressButton = () => {
    navigation.navigate('Test' as never);
    setName(nameInput);
  };

  return (
    <NameContainer>
      <ContentContainer>
        <InputContainer>
          <CustomText fontType="H4" color={color.white100}>
            불리고 싶은 이름을 알려주세요.
          </CustomText>
          <Input
            value={nameInput}
            onChange={handleInputChange}
            onSubmit={() => {
              setIsButtonVisible(true);
            }}
            placeholder="이름을 입력해주세요"
          />
        </InputContainer>
        {isButtonVisible && (
          <ButtonContainer>
            <Button size="SMALL" icon="BLACKARROW_ICON" onPress={handlePressButton}>
              다음으로
            </Button>
          </ButtonContainer>
        )}
      </ContentContainer>
    </NameContainer>
  );
};

const NameContainer = styled.View`
  background-color: ${color.gray900};
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.View`
  gap: ${calculateHeight(320)}px;
`;

const InputContainer = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'flex-start' })}
  padding-top: ${calculateHeight(123)}px;
  text-align: center;
  gap: 16px;
`;

const ButtonContainer = styled.View`
  ${flex({ alignItems: 'center' })}
`;

export default NamePage;
