import React, { useState } from 'react';
import { IconHeon, IconSol } from '@sinabro/icon';
import { CharacterChat, Column } from '@sinabro/ui';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { calculateHeight, calculateWidth } from '@sinabro/util';

interface CharacterProps {
  type?: string;
}

const Character = ({ type }: CharacterProps) => {
  const heonContext = [
    '편지가 제 새로운 치료법이 될 수 있을까요?',
    '편지를 보내게 된 건 기적적인 일이에요',
    '마음에 붙일 테이프가\n부족해질 날이 올까요?',
    '좋아하는 노래가 뭔가요?',
    '(산도의 사인을 받다니 여전히 믿기질 않아)',
    '환자를 구하는 건 의사의 숙명입니다',
    '당신을 직접 보고싶어요',
    '프로스트는 이름과 달리 따뜻해요',
    '프로스트는 예전에는 얼어있어\n살 수 없는 곳이었대요',
    '언제쯤 지구와 만날 수 있을까요?',
    '혼자있는 것을 즐기시나요?',
    '털 관리는 언제나 필수죠',
    "(I'm gonna be a star~)",
    '퇴근하고 집에 오면 아무것도 하기 싫어요',
    '남에게는 말 못 할 비밀도\n당신 앞에서는 말할 수 있을 것 같아요',
    '휴가가 주어진다면 바다로 떠나고 싶어요',
    '과일을 먹고싶어요',
    '다른 사람보다 뒤처진다 생각하지 말아요.\n당신만의 속도가 있으니까요',
    '뉴스에서 매일 지구 소식이 들려와요',
    '아무것도 하고싶지 않을 때가 있어요',
    '먀먀먀먕',
    '(배고파)',
    '불행은 왜 갑자기 나타나는 것일까요',
  ];

  const solContext = [
    '우주는 넓어, 그래서 기회도 많아!',
    '너도 나도 빛나는 별이야.',
    '매일 새로운 사람을 만나고 싶어.',
    '너는 어떤 모습일까?',
    '지구에 내 이야기가 닿을 수 있을까?',
    '지구에 친구가 생기면 정말 즐거울 거야!',
    '남의 기대보다는 나의 마음을 따르자.',
    '지구 친구들은 어떤 고민을 할까?',
    '모두에게 좋은 친구가 될 수 있을까?',
    '내가 찾는 건 진짜 친구야!',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIconPress = () => {
    type === 'HEON'
      ? setCurrentIndex((prevIndex) => (prevIndex + 1) % heonContext.length)
      : setCurrentIndex((prevIndex) => (prevIndex + 1) % solContext.length);
  };

  const getCurrentMessage = () => {
    if (type === 'HEON') {
      return heonContext[currentIndex];
    } else if (type === 'SOL') {
      return solContext[currentIndex];
    }
  };

  const currentMessage = getCurrentMessage();
  const marginTopValue =
    type === 'HEON'
      ? currentMessage?.includes('\n')
        ? calculateHeight(92)
        : calculateHeight(120)
      : calculateHeight(70);

  const gapValue = type === 'HEON' ? calculateHeight(20) : calculateHeight(4);

  return (
    <StyledCharcter marginTop={marginTopValue}>
      <Column alignItems="center" gap={gapValue}>
        <CharacterChat>{currentMessage}</CharacterChat>
        <Pressable
          onPress={handleIconPress}
          style={({ pressed }) => ({
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
          })}
        >
          {type === 'HEON' ? (
            <IconHeon width={calculateWidth(200)} height={calculateHeight(181.27)} />
          ) : (
            <IconSol width={calculateWidth(163)} height={calculateHeight(279.2)} />
          )}
        </Pressable>
      </Column>
    </StyledCharcter>
  );
};

export default Character;

const StyledCharcter = styled.View<{ marginTop: number }>`
  margin-top: ${(props: any) => props.marginTop}px;
`;
