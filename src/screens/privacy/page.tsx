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
            개인정보 처리방침{'\n\n'}
            제1조(목적){'\n'}
            밤돌이로(이하 ‘회사'라고 함)는 회사가 제공하고자 하는 서비스(이하 ‘회사
            서비스’)를 이용하는 개인(이하 ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를
            보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한
            법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보
            보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이
            개인정보처리방침(이하 ‘본 방침’)을 수립합니다.{'\n\n'}
            제2조(개인정보 처리의 원칙){'\n'}
            개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수
            있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수
            있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한
            이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.
            {'\n\n'}
            제3조(본 방침의 공개){'\n'}
            회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면
            또는 첫 화면과의 연결화면을 통해 본 방침을 공개하고 있습니다. 회사는 제1항에
            따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을
            쉽게 확인할 수 있도록 합니다.{'\n\n'}
            제4조(본 방침의 변경){'\n'}본 방침은 개인정보 관련 법령, 지침, 고시 또는
            정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다. 회사는
            제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로
            공지합니다.{'\n'}- 회사가 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는
            별도의 창을 통하여 공지하는 방법{'\n'}- 서면·모사전송·전자우편 또는 이와
            비슷한 방법으로 이용자에게 공지하는 방법
            {'\n'}
            회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다.
            다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.
            {'\n\n'}
            제5조(회원 가입을 위한 정보){'\n'}
            회사는 이용자의 회사 서비스에 대한 회원가입을 위하여 다음과 같은 정보를
            수집합니다.{'\n'}- 필수 수집 정보: 이메일 주소, 비밀번호, 이름 및 닉네임{'\n'}
            - 선택 수집 정보: 프로필 사진{'\n\n'}
            제6조(본인 인증을 위한 정보){'\n'}
            회사는 이용자의 본인인증을 위하여 다음과 같은 정보를 수집합니다.{'\n'}- 필수
            수집 정보: 이메일 주소, 이름 및 성별{'\n\n'}
            제7조(서비스 이용 및 부정 이용 확인을 위한 정보){'\n'}
            회사는 이용자의 서비스 이용에 따른 통계∙분석 및 부정이용의 확인∙분석을 위하여
            다음과 같은 정보를 수집합니다.{'\n'}- 필수 수집 정보: 서비스 이용기록, 쿠키,
            접속지 정보 및 기기정보{'\n\n'}
            제8조(개인정보 수집 방법){'\n'}
            회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.{'\n'}
            1. 이용자가 회사의 홈페이지에 자신의 개인정보를 입력하는 방식{'\n'}
            2. 어플리케이션 등 회사가 제공하는 홈페이지 외의 서비스를 통해 이용자가 자신의
            개인정보를 입력하는 방식{'\n'}
            3. 이용자가 회사가 발송한 이메일을 수신받아 개인정보를 입력하는 방식{'\n'}
            4. 이용자가 고객센터의 상담, 게시판에서의 활동 등 회사의 서비스를 이용하는
            과정에서 이용자가 입력하는 방식{'\n\n'}
            제9조(개인정보의 이용){'\n'}
            회사는 개인정보를 다음 각 호의 경우에 이용합니다.{'\n'}
            1. 공지사항의 전달 등 회사운영에 필요한 경우{'\n'}
            2. 이용문의에 대한 회신, 불만의 처리 등 이용자에 대한 서비스 개선을 위한 경우
            {'\n'}
            3. 회사의 서비스를 제공하기 위한 경우{'\n'}
            4. 법령 및 회사 약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를
            포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재를 위한
            경우{'\n'}
            5. 신규 서비스 개발을 위한 경우{'\n\n'}
            제10조(개인정보의 보유 및 이용기간){'\n'}
            회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적 달성을 위한 기간
            동안 개인정보를 보유 및 이용합니다.{'\n\n'}
            제11조(법령에 따른 개인정보의 보유 및 이용기간){'\n'}
            회사는 관계법령에 따라 다음과 같이 개인정보를 보유 및 이용합니다.{'\n'}- 계약
            또는 청약철회 등에 관한 기록: 5년{'\n'}- 대금결제 및 재화 등의 공급에 관한
            기록: 5년{'\n'}- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년{'\n'}-
            표시·광고에 관한 기록: 6개월{'\n\n'}
            제12조(개인정보의 파기원칙){'\n'}
            회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등
            개인정보가 필요하지 않을 경우에는 해당 정보를 지체 없이 파기합니다.{'\n\n'}
            제13조(개인정보파기절차){'\n'}
            회사는 개인정보의 파기를 위한 다음의 절차를 따릅니다.{'\n'}
            1. 파기계획 수립{'\n'}
            2. 파기 실행{'\n'}
            3. 파기 기록{'\n\n'}
            제14조(개인정보의 안전성 확보조치){'\n'}
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취합니다.{'\n'}
            1. 관리적 조치: 개인정보 처리직원 최소화 및 교육{'\n'}
            2. 기술적 조치: 개인정보의 암호화, 방화벽 및 보안 프로그램 사용{'\n'}
            3. 물리적 조치: 개인정보 보관 장소의 출입 통제 및 감시 시스템 설치{'\n\n'}
            제15조(이용자 및 법정대리인의 권리){'\n'}
            이용자 및 법정대리인은 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며,
            동의를 철회할 수 있습니다. 이러한 권리는 다음과 같이 행사할 수 있습니다.{'\n'}
            1. 회사의 고객센터를 통해 직접 요청할 수 있습니다.{'\n'}
            2. 회원 가입 시 제공한 이메일 주소로 요청할 수 있습니다.{'\n'}
            3. 전화 또는 팩스로 요청할 수 있습니다.{'\n\n'}
            제16조(개인정보 유출 등에 대한 조치){'\n'}
            회사는 개인정보의 분실·도난·유출 사실을 인지한 경우, 지체 없이 다음과 같은
            조치를 취합니다.{'\n'}
            1. 유출 사실의 확인{'\n'}
            2. 이용자 통지{'\n'}
            3. 유출 방지 대책{'\n'}
            4. 관계기관 신고{'\n'}
            5. 피해 구제{'\n\n'}
            제17조(개인정보 보호 책임자){'\n'}
            회사는 이용자의 개인정보를 보호하고 개인정보와 관련된 고충을 신속하게 처리하기
            위해 개인정보 보호 책임자를 지정합니다.{'\n\n'}
            제18조(개인정보 처리방침의 효력){'\n'}본 방침은 회사의 웹사이트 및 서비스에
            게시됨으로써 효력을 발생하며, 이용자는 본 방침에 동의함으로써 회사가
            개인정보를 수집하고 이용하는 것에 대한 동의를 하게 됩니다.{'\n\n'}
            제19조(개인정보 처리방침의 시행일){'\n'}본 개인정보 처리방침은 시행일부터
            시행합니다.{'\n'}
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
