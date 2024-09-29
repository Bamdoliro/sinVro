import React from 'react';
import { Button } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth } from '@sinabro/util';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'components/common';
import { ContentList } from 'components/Inquiry';

const InquiryPage = () => {
  const navigation = useNavigation();

  return (
    <StyledIntroduce>
      <Header title="문의 내역" />
      <StyledButton onPress={() => navigation.navigate('SubmitInquiry' as never)}>
        문의하기
      </StyledButton>
      <ContentList />
    </StyledIntroduce>
  );
};

export default InquiryPage;

const StyledIntroduce = styled.View`
  height: 100%;
  width: 100%;
  padding-top: ${calculateHeight(143)}px;
  background-color: ${color.gray900};
  gap: ${calculateHeight(36)}px;
`;

const StyledButton = styled(Button)`
  margin-left: ${calculateWidth(20)}px;
  margin-right: ${calculateWidth(20)}px;
`;
