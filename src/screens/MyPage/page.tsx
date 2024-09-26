import React from 'react';
import { CustomText } from '@sinabro/ui';
import styled from 'styled-components/native';
import { color } from '@sinabro/design-token';
import { calculateHeight, calculateWidth, flex } from '@sinabro/util';
import { IconChat, IconQuestionRed, IconSetting } from '@sinabro/icon';
import { MyPageScreenProps } from 'navigation/Navigation.type';
import { useNameStore } from '@sinabro/util';

const IntroducePage = ({ navigation }: MyPageScreenProps) => {
  const { name } = useNameStore();

  return (
    <StyledIntroduce>
      <ActionSection>
        <NameContainer>
          <CustomText fontType="H1" color={color.white100}>
            {name}
          </CustomText>
        </NameContainer>
        <FunctionContainer>
          <SupportContainer>
            <SettingContainer onPress={() => navigation.navigate('Setting')}>
              <IconSetting width={40} height={41} />
              <CustomText fontType="B4" color={color.white100}>
                설정
              </CustomText>
            </SettingContainer>
            <QuestionContainer onPress={() => navigation.navigate('Inquiry')}>
              <IconChat width={40} height={34} />
              <CustomText fontType="B4" color={color.white100}>
                문의
              </CustomText>
            </QuestionContainer>
          </SupportContainer>
          <FAQContainer onPress={() => navigation.navigate('FAQ')}>
            <IconQuestionRed width={26} height={40} />
            <CustomText fontType="B4" color={color.white100}>
              자주 묻는 질문
            </CustomText>
          </FAQContainer>
        </FunctionContainer>
      </ActionSection>
      <InfoSection>
        <LogOutContainer>
          <CustomText fontType="B4" color={color.white100}>
            로그아웃
          </CustomText>
        </LogOutContainer>
        <CustomText fontType="caption" color={color.white100}>
          1.0.0 (최신 버전)
        </CustomText>
      </InfoSection>
    </StyledIntroduce>
  );
};

export default IntroducePage;

const StyledIntroduce = styled.View`
  height: 100%;
  width: 100%;
  padding-bottom: ${calculateHeight(100)}px;
  background-color: ${color.gray900};
  gap: ${calculateHeight(192)}px;
`;

const ActionSection = styled.View`
  ${flex({ alignItems: 'center' })}
  margin-top: ${calculateHeight(46)}px;
  gap: 32px;
`;

const NameContainer = styled.View`
  ${flex({ alignItems: 'center' })}
`;

const FunctionContainer = styled.View`
  ${flex({ alignItems: 'center' })}
  gap: 16px;
`;

const SupportContainer = styled.View`
  ${flex({ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' })}
  gap: 16px;
`;

const SettingContainer = styled.TouchableOpacity`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(160)}px;
  height: ${calculateHeight(126)}px;
  padding-top: ${calculateHeight(10)}px;
  border: 1px solid ${color.glassStroke};
  background-color: ${color.glassWhite};
  border-radius: 6px;
  gap: ${calculateWidth(16)}px;
`;

const QuestionContainer = styled.TouchableOpacity`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(160)}px;
  height: ${calculateHeight(126)}px;
  padding-top: ${calculateHeight(10)}px;
  border: 1px solid ${color.glassStroke};
  background-color: ${color.glassWhite};
  border-radius: 6px;
  gap: ${calculateWidth(21)}px;
`;

const FAQContainer = styled.TouchableOpacity`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(336)}px;
  height: ${calculateHeight(84)}px;
  border: 1px solid ${color.glassStroke};
  background-color: ${color.glassWhite};
  border-radius: 6px;
  gap: ${calculateWidth(139)}px;
`;

const InfoSection = styled.View`
  ${flex({ alignItems: 'center' })}
  gap: 16px;
`;

const LogOutContainer = styled.TouchableOpacity`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: ${calculateWidth(336)}px;
  height: ${calculateHeight(56)}px;
  border: 1px solid ${color.glassStroke};
  background-color: ${color.glassWhite};
  border-radius: 6px;
`;
