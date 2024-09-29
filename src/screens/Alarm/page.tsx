import React from 'react';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { Header } from 'components/common';
import { AlarmList } from 'components/Alarm';

const AlarmPage = () => {
  return (
    <StyledAlarmPagee>
      <Header title="알림" />
      <ScrollViewContainer>
        <AlarmList />
      </ScrollViewContainer>
    </StyledAlarmPagee>
  );
};

export default AlarmPage;

const StyledAlarmPagee = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${color.gray900};
`;

const ScrollViewContainer = styled.View`
  padding-top: 135px;
  height: 90%;
`;
