import React from 'react';
import { color } from '@sinabro/design-token';
import { Button, CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

interface ImageInputProps {
  image: string | null;
  setImage: (image: string | null) => void;
}

const ImageInput = ({ image, setImage }: ImageInputProps) => {
  return (
    <StyledImageInput>
      <AttachingPhotoButton onPress={() => {}}>
        <CustomText fontType="B4" color={color.white100}>
          사진 첨부
        </CustomText>
      </AttachingPhotoButton>
      <CustomText fontType="B6" color={color.white100}>
        최대 20MB 파일 1개 첨부 가능합니다
      </CustomText>
      {image && (
        <ImageContainer>
          <StyledImage source={{ uri: image }} />
          <Button onPress={() => setImage(null)}>삭제</Button>
        </ImageContainer>
      )}
    </StyledImageInput>
  );
};

export default ImageInput;

const StyledImageInput = styled.View`
  width: ${calculateWidth(335)}px;
  height: ${calculateHeight(175)}px;
  gap: ${calculateHeight(8)}px;
`;

const AttachingPhotoButton = styled.TouchableOpacity`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  height: ${calculateHeight(56)}px;
  border: 1px solid ${color.white100};
  border-radius: 6px;
`;

const ImageContainer = styled.View`
  ${flex({ alignItems: 'center' })};
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;
