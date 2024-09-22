import { flex } from '@sinabro/util';
import styled from 'styled-components/native';
import React from 'react';
import DiaryTab from './DiaryTab/DiaryTab';
import { Row } from '@sinabro/ui';
import MailBoxTab from './MailBoxTab/MailBoxTab';
import RadioTab from './RadioTab/ReadioTab';

const TabBar = () => {
  return (
    <StyledTabBar>
      <Row alignItems="center" gap={40}>
        <DiaryTab />
        <MailBoxTab />
        <RadioTab />
      </Row>
    </StyledTabBar>
  );
};

export default TabBar;

const StyledTabBar = styled.View`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  height: 64px;
  margin-top: 53.73px;
  margin-bottom: 50px;
`;
