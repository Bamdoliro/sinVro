import { Dimensions, View } from 'react-native';
import CustomText from '../Text/Text';
import { ReactNode, useState } from 'react';
import { color } from '@sinabro/design-token';
import styled from 'styled-components/native';
import DetailedCard from './DetailedCard';
import { flex } from '@sinabro/util';

interface Props {
  onPress: () => void;
  children: ReactNode;
  emotion: string;
  englishEmotion: string;
  isFocused: boolean;
  detail1: string;
  detail2: string;
  detail3: string;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const iPhone13MiniWidth = 375;
const iPhone13MiniHeight = 780;

const calculateWidth = (baseWidth: number) =>
  (screenWidth / iPhone13MiniWidth) * baseWidth;
const calculateHeight = (baseHeight: number) =>
  (screenHeight / iPhone13MiniHeight) * baseHeight;

const EmotionCard = ({
  onPress,
  children,
  emotion,
  englishEmotion,
  detail1,
  detail2,
  detail3,
}: Omit<Props, 'isFocused'>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handlePress = () => {
    setIsFocused(!isFocused);
    setShowDetails(!showDetails);
    onPress();
  };

  return (
    <Container>
      <StyledEmotionCard onPress={handlePress} isFocused={isFocused}>
        <ImageContainer>{children}</ImageContainer>
        <TextContainer>
          <CustomText fontType="B2" color={isFocused ? color.gray900 : color.gray800}>
            {emotion}
          </CustomText>
          <CustomText
            fontType="caption"
            color={isFocused ? color.gray600 : color.gray600}
          >
            {englishEmotion}
          </CustomText>
        </TextContainer>
      </StyledEmotionCard>

      {showDetails && (
        <DetailsContainer>
          <DetailedCard onPress={() => {}}>{detail1}</DetailedCard>
          <DetailedCard onPress={() => {}}>{detail2}</DetailedCard>
          <DetailedCard onPress={() => {}}>{detail3}</DetailedCard>
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
  gap: ${calculateWidth(10)}px;
`;

const StyledEmotionCard = styled.Pressable<Props>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })};
  width: ${calculateWidth(160)}px;
  height: 208px;
  background-color: ${({ isFocused }: Props) =>
    isFocused ? color.white80 : color.glassWhite};
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
