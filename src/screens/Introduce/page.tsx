import React, { useRef, useState } from 'react';
import {
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, flex } from '@sinabro/util';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

interface PageData {
  id: string;
  text: string;
}

const List: PageData[] = [
  { id: '1', text: '시나브로에 오신 것을 환영해요.\n여기는 당신을 위한 작은 쉼터에요.' },
  { id: '2', text: '블랙홀 너머의 비밀 친구가\n어떤한 일로 인해 편지를 보낼거에요.' },
  {
    id: '3',
    text: '현재 지구의 기술력으로는\n블랙홀 너머의 비밀 친구에게\n답을 보내지 못해요.',
  },
  {
    id: '4',
    text: '그렇지만 매일 나의 감정에 대해\n솔직하게 일기를 쓰다보면\n언젠가는 답장을 받을 수 있을거에요.',
  },
];

const IntroducePage = () => {
  const flatListRef = useRef<FlatList<PageData>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const maxOffsetX = (List.length - 1) * width;

    if (currentIndex === List.length - 1 && offsetX >= maxOffsetX) {
      // 마지막 페이지에서 스크롤 완료 후 로그인 페이지로 이동
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' as never }],
      });
    }
  };

  const renderItem = ({ item }: { item: PageData }) => (
    <StyledPage>
      <CenteredText fontType="H4" color={color.white100}>
        {item.text}
      </CenteredText>
    </StyledPage>
  );

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={List}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd} // 수정: onMomentumScrollEnd 사용
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorContainer>
        {List.map((_, index) => (
          <Indicator key={index} active={currentIndex === index} />
        ))}
      </IndicatorContainer>
    </Container>
  );
};

export default IntroducePage;

const Container = styled.View`
  height: 100%;
  background-color: ${color.gray900};
`;

const StyledPage = styled.View`
  ${flex({ alignItems: 'center' })}
  top: ${calculateHeight(236)}px;
  width: ${width}px;
`;

const CenteredText = styled(CustomText)`
  text-align: center;
`;

const IndicatorContainer = styled.View`
  ${flex({ flexDirection: 'row', justifyContent: 'center' })}
  bottom: ${calculateHeight(110)}px;
`;

const Indicator = styled.View<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${(props: any) => (props.active ? color.white100 : color.gray500)};
  margin: 0 8px;
`;
