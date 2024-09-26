import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { CustomText, Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color, font } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

const SubmitInquiryPage = () => {
  const [textValue, setTextValue] = useState('');
  const Limit = 1000;

  const [image, setImage] = useState<string | null>(null);

  return (
    <StyledSubmitInquiry>
      <ContentContainer>
        <InputContainer>
          <TextInput
            value={textValue}
            placeholder="문의 내용을 입력해주세요"
            placeholderTextColor={color.gray300}
            multiline
            scrollEnabled={true}
            onChangeText={(text: string) => setTextValue(text)}
            maxLength={Limit}
          />
          <CustomTextContainer>
            <CustomText fontType="caption" color={color.gray300}>
              {textValue.length}/{Limit}
            </CustomText>
          </CustomTextContainer>
        </InputContainer>
        <AttachingPhotoContainer>
          <AttachingPhoto>
            <CustomText fontType="B4" color={color.white100}>
              사진 첨부
            </CustomText>
          </AttachingPhoto>
          <CustomText fontType="B6" color={color.white100}>
            최대 20MB 파일 1개 첨부 가능합니다
          </CustomText>
          {image && (
            <View>
              <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
              <Button onPress={() => setImage(null)}>삭제</Button>
            </View>
          )}
        </AttachingPhotoContainer>
      </ContentContainer>
      <Button
        onPress={() => {}}
        disabled={!textValue}
        styleType={!textValue ? 'DISABLED' : 'DEFAULT'}
      >
        입력 완료
      </Button>
    </StyledSubmitInquiry>
  );
};

export default SubmitInquiryPage;

const StyledSubmitInquiry = styled.View`
  height: 100%;
  width: 100%;
  padding: ${calculateHeight(44)}px ${calculateWidth(20)}px;
  background-color: ${color.gray900};
  gap: ${calculateHeight(240)}px;
`;

const ContentContainer = styled.View`
  gap: ${calculateHeight(20)}px;
`;

const InputContainer = styled.View`
  position: relative;
  width: ${calculateWidth(335)}px;
  height: ${calculateHeight(160)}px;
  background-color: ${color.white100};
  padding: ${calculateHeight(8)}px ${calculateWidth(16)}px ${calculateHeight(16)}px
    ${calculateWidth(16)}px;
  border-radius: 6px;
`;

const TextInput = styled.TextInput`
  ${font.B5}
  width: 100%;
  height: ${calculateHeight(124)}px;
  color: ${color.gray800};
`;

const CustomTextContainer = styled.View`
  position: absolute;
  bottom: ${calculateHeight(8)}px;
  right: ${calculateWidth(16)}px;
`;

const AttachingPhotoContainer = styled.View`
  gap: ${calculateHeight(8)}px;
`;

const AttachingPhoto = styled.TouchableOpacity`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  height: ${calculateHeight(60)}px;
  border: 1px solid ${color.white100};
  border-radius: 6px;
`;
