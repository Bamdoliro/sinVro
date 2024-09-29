import React from 'react';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight } from '@sinabro/util';
import { Header } from 'components/common';
import { Alarm } from 'components/Setting';

const SettingPage = () => {
  return (
    <StyledSetting>
      <Header title="설정" />
      <Alarm />
    </StyledSetting>
  );
};

export default SettingPage;
const StyledSetting = styled.View`
  background-color: ${color.gray900};
  width: 100%;
  height: 100%;
  padding-top: ${calculateHeight(139)}px;
`;
