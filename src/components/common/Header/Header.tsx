import { useEffect } from 'react';
import { BackHandler, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { calculateHeight, flex } from '@sinabro/util';
import { IconWhiteArrow } from '@sinabro/icon';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title?: string;
  active?: boolean;
  backgroundColor: string;
}

const Header = ({ title, active, backgroundColor }: Props) => {
  const navigation = useNavigation();

  const handlePressBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlePressBack);
    };
  }, [handlePressBack]);

  return (
    <StyledHeader $active={active} $backgroundColor={backgroundColor}>
      <TouchableOpacity onPress={handlePressBack}>
        <IconContainer>
          <IconWhiteArrow width={23} height={17} />
        </IconContainer>
        {title}
      </TouchableOpacity>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.View<{ $active?: boolean; $backgroundColor: string }>`
  ${flex({ justifyContent: 'space-around' })}
  background-color: ${(props: any) => props.$backgroundColor};
  padding-top: ${calculateHeight(28)}px;
`;

const IconContainer = styled.View`
  padding-top: ${calculateHeight(30)}px;
  padding-left: ${calculateHeight(20)}px;
`;
