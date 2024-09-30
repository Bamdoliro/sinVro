import React, { useState } from 'react';
import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import { DiaryInput, Header } from 'components/WriteDiary';
import { Column, CompleteButton, CustomText } from '@sinabro/ui';
import { flex } from '@sinabro/util';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';

const WriteDiaryPage = () => {
  const navigation = useNavigation();
  const [textValue, setTextValue] = useState<string>('');
  const formatDate = dayjs().format('YYYY.MM.DD');

  return (
    <StyledWriteDiaryPage>
      <Header />
      <ContentContainer>
        <Column gap={27} alignItems="center">
          <CustomText fontType="H3" color={color.gray900}>
            {formatDate}
          </CustomText>
          <DiaryInput textValue={textValue} setTextValue={setTextValue} />
        </Column>
        <CompleteButton onPress={() => navigation.navigate('SelectEmotion' as never)}>
          작성 완료
        </CompleteButton>
      </ContentContainer>
    </StyledWriteDiaryPage>
  );
};

export default WriteDiaryPage;

const StyledWriteDiaryPage = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  background-color: ${color.white100};
`;

const ContentContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 100%;
  top: 97px;
  bottom: 34px;
`;
