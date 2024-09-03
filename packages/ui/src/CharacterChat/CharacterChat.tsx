import { color } from '@sinabro/design-token';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import CustomText from '../Text/Text';
import { useState } from 'react';
import Column from '../Flex/Column';
import { flex } from '@sinabro/util';

interface Props {
  content: string[]; 
}

const CharacterChat = ({ content }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  return (
    <StyledCharacterChat>
      <Pressable onPress={handlePress}>
        <Column gap={5} alignItems="center">
          <Chat>
            <CustomText fontType="cursive1" color={color.white100}>
              {content[currentIndex]}
            </CustomText>
          </Chat>
          <DownTriangle />
        </Column>
      </Pressable>
    </StyledCharacterChat>
  );
};

export default CharacterChat;

const StyledCharacterChat = styled.View`
  width: 100%;
  height: 61px;
`;

const Chat = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'center' })};
  width: auto;
  height: 45px;
  border-radius: 8px;
  padding: 8px 12px;
  border: 1px solid ${color.glassWhite};
  background-color: ${color.glassStroke};
`;

const DownTriangle = styled.View`
  width: 0;
  height: 0;
  border-top-width: 16px;
  border-right-width: 10px;
  border-left-width: 10px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${color.glassStroke};
  border-bottom-color: transparent;
`;
