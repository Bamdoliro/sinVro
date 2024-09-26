import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Introduce: undefined;
  Login: undefined;
  Name: undefined;
  Test: undefined;
  Character: undefined;
  Story: undefined;
  MyPage: undefined;
  Inquiry: undefined;
  InquiryDetail: { id: number };
  SubmitInquiry: undefined;
  Setting: undefined;
  FAQ: undefined;
  Alarm: undefined;
};

export type DetailScreenProps = NativeStackScreenProps<StackParamList, 'InquiryDetail'>;
export type InquiryScreenProps = NativeStackScreenProps<StackParamList, 'Inquiry'>;
export type MyPageScreenProps = NativeStackScreenProps<StackParamList, 'MyPage'>;

