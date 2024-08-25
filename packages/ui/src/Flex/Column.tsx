import { flex } from '@sinabro/util';
import { FlexProps } from './Flex.type';
import styled from 'styled-components/native';

const Column = ({
  children,
  gap,
  justifyContent,
  alignItems,
  width,
  height,
  style,
}: FlexProps) => {
  return (
    <StyledColumn style={{ gap, justifyContent, alignItems, width, height, ...style }}>
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.View`
  ${flex({ flexDirection: 'column' })}
`;
