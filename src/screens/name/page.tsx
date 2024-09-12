import { useState } from 'react';
import { CustomText, Input, Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, flex } from '@sinabro/util';
import { IconWhiteArrow } from '@sinabro/icon';

const NamePage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleEnterPress = () => {
    setIsButtonVisible(true);
  };

  return (
    <NameContainer>
      <IconContainer>
        <IconWhiteArrow width={23} height={17} />
      </IconContainer>
      <ContentContainer>
        <InputContainer>
          <CustomText fontType="H4" color={color.white100}>
            불리고 싶은 이름을 알려주세요.
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
      </ContentContainer>
    </NameContainer>
  );
};

const NameContainer = styled.View`
  background-color: ${color.gray900};
  gap: ${calculateHeight(10)}px;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.View`
  gap: ${calculateHeight(340)}px;
`;

const IconContainer = styled.View`
  padding-top: ${calculateHeight(72)}px;
  padding-left: ${calculateHeight(20)}px;
`;

const InputContainer = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'flex-start' })}
  padding-top: ${calculateHeight(120)}px;
  text-align: center;
  gap: 16px;
`;

const ButtonContainer = styled.View`
  ${flex({ alignItems: 'center' })}
`;

export default NamePage;
