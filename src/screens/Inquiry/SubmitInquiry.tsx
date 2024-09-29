import React, { useState } from 'react';
import { Button, Column } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, flex } from '@sinabro/util';
import { Header } from 'components/common';
import { ImageInput, Input } from 'components/Inquiry';
import { useNavigation } from '@react-navigation/native';

const SubmitInquiryPage = () => {
  const [textValue, setTextValue] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

  const isButtonDisabled = !textValue && !image;
  const navigation = useNavigation();

  return (
    <StyledSubmitInquiry>
      <Header title="문의" />
      <Column gap={160} alignItems="center">
        <Column gap={20} alignItems="center">
          <Input textValue={textValue} setTextValue={setTextValue} />
          <ImageInput image={image} setImage={setImage} />
        </Column>
        <Button
          width={335}
          onPress={() => navigation.navigate('Inquiry' as never)}
          disabled={isButtonDisabled}
          styleType={isButtonDisabled ? 'DISABLED' : 'DEFAULT'}
        >
          입력 완료
        </Button>
      </Column>
    </StyledSubmitInquiry>
  );
};

export default SubmitInquiryPage;

const StyledSubmitInquiry = styled.View`
  ${flex({ alignItems: 'center' })}
  height: 100%;
  width: 100%;
  padding-top: ${calculateHeight(143)}px;
  background-color: ${color.gray900};
  padding-bottom: 98px;
`;
