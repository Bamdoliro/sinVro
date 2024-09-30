import CustomText from '../Text/Text';
import { ReactNode } from 'react';
import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import DetailedCard from './DetailedCard';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';

interface Props {
  indexNumber: number;
  onPress: () => void;
  onDetailSelect: (detail: string) => void;
  children: ReactNode;
  emotion: string;
  englishEmotion: string;
  isSelected: boolean;
  detail1: string;
  detail2: string;
  detail3: string;
}

const EmotionCard = ({
                       indexNumber,
                       onPress,
                       onDetailSelect,
                       children,
                       emotion,
                       englishEmotion,
                       isSelected,
                       detail1,
                       detail2,
                       detail3,
                     }: Props) => {
  const handlePress = () => {
    onPress();
  };

  const handleDetailSelect = (detail: string) => {
    onDetailSelect(detail);
  };

  return (
    <Container>
      <StyledEmotionCard onPress={handlePress} isSelected={isSelected}>
        <ImageContainer>{children}</ImageContainer>
        <TextContainer>
          <CustomText fontType="B2" color={isSelected ? color.gray900 : color.white100}>
            {emotion}
          </CustomText>
          <CustomText
            fontType="caption"
            color={isSelected ? color.gray900 : color.white100}
          >
            {englishEmotion}
          </CustomText>
        </TextContainer>
      </StyledEmotionCard>

      {isSelected && (
        <DetailsContainer>
          <DetailedCard onPress={() => handleDetailSelect(detail1)}>
            {detail1}
          </DetailedCard>
          <DetailedCard onPress={() => handleDetailSelect(detail2)}>
            {detail2}
          </DetailedCard>
          <DetailedCard onPress={() => handleDetailSelect(detail3)}>
            {detail3}
          </DetailedCard>
        </DetailsContainer>
      )}
    </Container>
  );
};

export default EmotionCard;

const DetailsContainer = styled.View`
    ${flex({ justifyContent: 'center', flexDirection: 'column' })};
    margin-left: ${calculateWidth(10)}px;
    gap: ${calculateHeight(7.6)}px;
`;

const Container = styled.View`
    flex-direction: row;
    gap: ${calculateWidth(5)}px;
`;

const StyledEmotionCard = styled.Pressable<{ isSelected: boolean }>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })};
    width: ${calculateWidth(160)}px;
    height: 208px;
    background-color: ${({ isSelected }: any) =>
            isSelected ? color.white80 : color.glassWhite};
    border: 1px solid ${color.glassStroke};
    border-radius: 12px;
    padding-top: ${calculateHeight(20)}px;
`;

const ImageContainer = styled.View`
    padding-bottom: ${calculateHeight(20)}px;
`;

const TextContainer = styled.View`
    ${flex({ alignItems: 'flex-start' })};
    padding-left: ${calculateWidth(15)}px;
    width: 100%;
`;