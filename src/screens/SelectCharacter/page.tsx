import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { IconWhiteArrow } from '@sinabro/icon';
import { Column, Row } from '@sinabro/ui';
import { CharacterCategory, CharacterDescribe } from 'components/SelectCharacter';
import { characterData, Heon, Sol } from 'types/Character/remote';

const screenWidth = Dimensions.get('window').width;

const SelectCharacterPage = () => {
  const [currentType, setCurrentType] = useState('heon');
  const [currentCategory, setCurrentCategory] = useState(Heon);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(scrollPosition / screenWidth);

    if (activeIndex === 0 && currentType !== 'heon') {
      setCurrentType('heon');
      setCurrentCategory(Heon);
    } else if (activeIndex === 1 && currentType !== 'sol') {
      setCurrentType('sol');
      setCurrentCategory(Sol);
    }
  };

  const handleScrollEndDrag = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(scrollPosition / screenWidth);
    flatListRef.current?.scrollToOffset({
      offset: activeIndex * screenWidth,
      animated: true,
    });
  };

  return (
    <StyledSelectCharacterPage>
      <Column gap={calculateHeight(36)}>
        <Column gap={calculateHeight(16)}>
          <Column gap={calculateHeight(31)}>
            <IconContainer>
              <IconWhiteArrow height={16} width={23} />
            </IconContainer>
            <FlatList
              ref={flatListRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={characterData}
              keyExtractor={(item) => item.type}
              renderItem={({ item }) => (
                <CharacterDescribe type={item.type}>{item.description}</CharacterDescribe>
              )}
              onScroll={handleScroll}
              onScrollEndDrag={handleScrollEndDrag}
              decelerationRate="normal"
              snapToInterval={screenWidth}
              snapToAlignment="start"
              // eslint-disable-next-line react/no-unstable-nested-components
              ItemSeparatorComponent={() => <Separator />}
            />
          </Column>
          <IndicatorContainer>
            <Indicator active={currentType === 'heon'} />
            <Indicator active={currentType === 'sol'} />
          </IndicatorContainer>
        </Column>
        <Column gap={calculateHeight(6)}>
          <Row gap={calculateWidth(6)}>
            {currentCategory.slice(0, currentType === 'heon' ? 3 : 4).map((category) => (
              <CharacterCategory key={category.id}>{category.text}</CharacterCategory>
            ))}
          </Row>
          <Row gap={calculateWidth(6)}>
            {currentCategory.slice(currentType === 'heon' ? 3 : 4).map((category) => (
              <CharacterCategory key={category.id}>{category.text}</CharacterCategory>
            ))}
          </Row>
        </Column>
      </Column>
    </StyledSelectCharacterPage>
  );
};

export default SelectCharacterPage;

const StyledSelectCharacterPage = styled.View`
  width: auto;
  height: 100%;
  background-color: ${color.gray900};
  padding: ${calculateHeight(65)}px ${calculateWidth(20)}px ${calculateHeight(90)}px
    ${calculateWidth(20)}px;
`;

const IndicatorContainer = styled.View`
  ${flex({ flexDirection: 'row', justifyContent: 'center' })}
`;

const Indicator = styled.View<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${(props: any) => (props.active ? color.white100 : color.gray500)};
  margin: 0 8px;
`;

const IconContainer = styled.View`
  padding-left: ${calculateWidth(9)}px;
`;

const Separator = styled.View`
  width: ${calculateWidth(20)}px;
`;
