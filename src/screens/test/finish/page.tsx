import { Header } from 'components/test';
import { useCTAButton } from './finish.hooks';
import React from 'react';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, flex } from '@sinabro/util';
import { Button, Column, CustomText } from '@sinabro/ui';
import { useNavigation } from '@react-navigation/native';
import useUser from 'hooks/useUser';

const FinishPage = () => {
  const navigation = useNavigation();
  const { handleMovePreviousStep } = useCTAButton();
  const user = useUser();

  return (
    <>
      <Header onPress={handleMovePreviousStep} />
      <StyledFinishPage>
        <Column alignItems="center" gap={calculateHeight(381)}>
          <CustomText
            fontType="H4"
            color={color.white100}
            style={{ textAlign: 'center' }}
          >
            설문에 답하시느라 고생 많으셨어요.{'\n'}
            {user.userData.name} 님의 비밀친구를{'\n'}만나볼 시간이에요.
          </CustomText>
          <Button
            onPress={() => {
              navigation.navigate('Character' as never);
            }}
            size="SMALL"
            icon="BLACKARROW_ICON"
          >
            다음으로
          </Button>
        </Column>
      </StyledFinishPage>
    </>
  );
};

export default FinishPage;

const StyledFinishPage = styled.View`
  ${flex({ alignItems: 'center' })}
  background-color: ${color.gray900};
  padding-top: ${calculateHeight(100)}px;
  width: 100%;
  height: 100%;
`;
