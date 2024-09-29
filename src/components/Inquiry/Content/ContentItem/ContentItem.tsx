import React from 'react';
import { Alert } from 'react-native';
import { color } from '@sinabro/design-token';
import { Column, CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  InquiryDetail: { id: number };
};

type InquiryDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'InquiryDetail'
>;

interface Props {
  id: number;
  title: string;
  date: string;
  isAnswer: boolean;
}

const ContentItem = ({ id, title, date, isAnswer }: Props) => {
  const navigation = useNavigation<InquiryDetailScreenNavigationProp>();

  const handlePress = () => {
    if (isAnswer) {
      navigation.navigate('InquiryDetail', { id });
    } else {
      showAlert();
    }
  };

  const showAlert = () => {
    Alert.alert('답변이 오지 않았어요', '', [{ text: '확인' }]);
  };

  return (
    <StyledContentItem onPress={handlePress}>
      <Column alignItems="start">
        <CustomText fontType="B5" color={color.white100}>
          {title}
        </CustomText>
        <CustomText fontType="B6" color={color.white80}>
          {date}
        </CustomText>
      </Column>
      {isAnswer && (
        <AnsweredBadge>
          <CustomText fontType="B6" color={color.white100}>
            답변 완료
          </CustomText>
        </AnsweredBadge>
      )}
    </StyledContentItem>
  );
};

export default ContentItem;

const flexRowCenter = flex({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledContentItem = styled.TouchableOpacity`
  ${flexRowCenter}
  width: 100%;
  padding: ${calculateHeight(16)}px;
  background-color: ${color.glassWhite};
  border: 1px solid ${color.glassStroke};
  border-radius: 6px;
  margin-bottom: ${calculateHeight(8)}px;
`;

const AnsweredBadge = styled.View`
  background-color: ${color.glassDark};
  border-radius: 999px;
  padding: ${calculateHeight(6)}px ${calculateWidth(12)}px;
`;
