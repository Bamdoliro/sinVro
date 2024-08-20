import { flex } from '@sinabro/util';
import { FlexProps } from './Flex.type';
import styled from 'styled-components/native';

const Row = ({
  children,
  gap,
  justifyContent,
  alignItems,
  width,
  height,
  style,
}: FlexProps) => {
  return (
    <StyledRow style={{ gap, justifyContent, alignItems, width, height, ...style }}>
      {children}
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.View`
  ${flex({ flexDirection: 'row' })}
`;
