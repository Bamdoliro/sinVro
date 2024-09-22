import React, { useState } from 'react';
import { IconHeon } from '@sinabro/icon';
import { CharacterChat, Column } from '@sinabro/ui';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';

const Character = () => {
  const context = [
    '너를 만나 내 일상이 다채로워졌어',
    '안녕?',
    '반가워',
    '오늘은 무슨 일이 있었어?',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIconPress = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % context.length);
  };

  return (
    <StyledCharcter>
      <Column alignItems="center" gap={20}>
        <CharacterChat>{context[currentIndex]}</CharacterChat>
        <Pressable
          onPress={handleIconPress}
          style={({ pressed }) => ({
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
          })}
        >
          <IconHeon width={200} height={181.27} />
        </Pressable>
      </Column>
    </StyledCharcter>
  );
};

export default Character;

const StyledCharcter = styled.View`
  margin-top: 136px;
`;
