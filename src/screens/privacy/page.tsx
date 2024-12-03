import { useNavigation } from '@react-navigation/native';
import { color } from '@sinabro/design-token';
import { IconWhiteArrow } from '@sinabro/icon';
import { CustomText } from '@sinabro/ui';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import styled from 'styled-components/native';
import React from 'react';

const PrivcyPage = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StyledHeader>
        <IconContainer onPress={() => navigation.goBack()}>
          <IconWhiteArrow width={23} height={17} />
        </IconContainer>
        <TitleContainer>
          <CustomText fontType="H3" color={color.white100}>
            약관
          </CustomText>
        </TitleContainer>
      </StyledHeader>
      <ContentContainer>
        <ScrollContainer>
          <CustomText fontType="B5" color={color.white100}>
            개인정보 보호정책{'\n'}본 개인정보 보호정책은 밤돌이로(이하 "서비스 제공자")가
            무료 서비스로 제작한 모바일 기기용 시나브로 앱(이하 "애플리케이션")에
            적용됩니다. 이 서비스는 "있는 그대로" 사용하도록 의도되었습니다.{'\n'}
            {'\n'}정보 수집 및 사용{'\n'}이 애플리케이션은 다운로드 및 사용 시 정보를
            수집합니다. 이 정보에는 다음과 같은 정보가 포함될 수 있습니다.{'\n'}- 귀하의
            기기의 인터넷 프로토콜 주소(예: IP 주소){'\n'}- 귀하가 방문한 애플리케이션
            페이지, 방문 시간 및 날짜, 해당 페이지에서 소요된 시간{'\n'}- 신청서에 소요된
            시간{'\n'}- 모바일 기기에서 사용하는 운영 체제{'\n'}
            {'\n'}이 애플리케이션은 모바일 기기의 위치에 대한 정확한 정보를 수집하지
            않습니다.{'\n'}
            {'\n'}
            서비스 제공자는 귀하가 제공한 정보를 사용하여 귀하에게 중요한 정보, 필요한
            공지, 마케팅 프로모션을 제공하기 위해 수시로 귀하에게 연락할 수 있습니다.
            {'\n'}
            {'\n'}
            제3자 접근{'\n'}
            집계되고 익명화된 데이터만 주기적으로 외부 서비스에 전송되어 서비스 제공자가
            애플리케이션과 해당 서비스를 개선하는 데 도움이 됩니다. 서비스 제공자는 이
            개인정보 보호정책에 설명된 방식으로 귀하의 정보를 제3자와 공유할 수 있습니다.
            {'\n'}
            {'\n'}
            서비스 제공자는 사용자가 제공한 정보와 자동으로 수집된 정보를 공개할 수
            있습니다.{'\n'}- 소환장이나 유사한 법적 절차를 준수하는 등 법률에 의해
            요구되는 경우{'\n'}- 자신의 권리를 보호하거나, 자신이나 다른 사람의 안전을
            보호하거나, 사기를 조사하거나, 정부 요청에 응답하기 위해 공개가 필요하다고
            선의로 믿을 때{'\n'}- 당사를 대신하여 일하는 신뢰할 수 있는 서비스 제공자와
            함께 작업하고, 당사가 그들에게 공개하는 정보를 독립적으로 사용하지 않으며, 본
            개인정보 보호정책에 명시된 규칙을 준수하는 데 동의했습니다.{'\n'}
            {'\n'}
            옵트아웃 권리{'\n'}
            응용 프로그램을 제거하면 모든 정보 수집을 쉽게 중단할 수 있습니다. 모바일
            기기의 일부로 제공되거나 모바일 애플리케이션 마켓플레이스나 네트워크를 통해
            제공되는 표준 제거 프로세스를 사용할 수 있습니다.{'\n'}
            {'\n'}
            데이터 보존 정책{'\n'}
            서비스 제공자는 귀하가 애플리케이션을 사용하는 동안 그리고 그 후 합리적인 기간
            동안 사용자 제공 데이터를 보관합니다. 애플리케이션을 통해 제공한 사용자 제공
            데이터를 삭제하기를 원하시면 dev.bamdoliro@gmail.com으로 연락하시면 합리적인
            시간 내에 답변해 드리겠습니다.{'\n'}
            {'\n'}
            어린이들{'\n'}
            서비스 제공자는 13세 미만의 어린이에게 의도적으로 데이터를 요청하거나, 이들을
            대상으로 마케팅하는 데 애플리케이션을 사용하지 않습니다.{'\n'}이
            애플리케이션은 13세 미만의 어린이를 대상으로 하지 않습니다. 서비스 제공자는
            13세 미만의 어린이로부터 개인 식별 정보를 고의로 수집하지 않습니다. 서비스
            제공자가 13세 미만의 어린이가 개인 정보를 제공했다는 사실을 발견한 경우,
            서비스 제공자는 즉시 서버에서 이를 삭제합니다. 부모 또는 보호자이고 자녀가
            개인 정보를 제공했다는 사실을 알고 있는 경우, 서비스
            제공자(dev.bamdoliro@gmail.com)에 연락하여 필요한 조치를 취할 수 있도록
            하십시오.{'\n'}
            {'\n'}
            보안{'\n'}
            서비스 제공자는 귀하의 정보 기밀성을 보호하는 데 관심이 있습니다. 서비스
            제공자는 서비스 제공자가 처리하고 유지하는 정보를 보호하기 위해 물리적,
            전자적, 절차적 보호 장치를 제공합니다.{'\n'}
            {'\n'}
            변화{'\n'}이 개인정보 보호정책은 어떤 이유로든 수시로 업데이트될 수 있습니다.
            서비스 제공자는 이 페이지를 새로운 개인정보 보호정책으로 업데이트하여 개인정보
            보호정책의 변경 사항을 귀하에게 알립니다. 지속적인 사용은 모든 변경 사항에
            대한 승인으로 간주되므로, 변경 사항이 있는지 정기적으로 이 개인정보 보호정책을
            참조하는 것이 좋습니다.{'\n'}본 개인정보처리방침은 2024-12-01부터 적용됩니다.
            {'\n'}
            {'\n'}
            귀하의 동의{'\n'}본 애플리케이션을 사용함으로써 귀하는 현재 및 당사가 개정한
            본 개인정보 보호정책에 명시된 대로 귀하의 정보 처리에 동의하는 것입니다.{'\n'}
            {'\n'}
            문의하기{'\n'}
            애플리케이션을 사용하는 동안 개인정보 보호와 관련된 질문이 있거나 개인정보
            보호 관행에 관한 질문이 있으면 dev.bamdoliro@gmail.com으로 이메일을 보내
            서비스 제공자에게 문의하세요.{'\n'}
          </CustomText>
        </ScrollContainer>
      </ContentContainer>
    </Container>
  );
};

export default PrivcyPage;

const Container = styled.View`
  flex: 1;
  background-color: ${color.gray900};
`;

const StyledHeader = styled.View`
  position: absolute;
  top: ${calculateHeight(60)}px;
  left: 0;
  width: 100%;
  height: ${calculateHeight(50)}px;
  z-index: 10;
  background-color: ${color.gray900};
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  left: ${calculateWidth(20)}px;
  z-index: 11;
`;

const TitleContainer = styled.View`
  flex: 1;
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
`;

const ContentContainer = styled.View`
  flex: 1;
  margin-top: ${calculateHeight(67)}px;
`;

const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: calculateWidth(20),
    paddingBottom: calculateHeight(20),
  },
})`
  margin-top: ${calculateHeight(67)}px;
  flex: 1;
  background-color: ${color.gray900};
`;
