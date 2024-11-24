import { sinabro } from 'apis/instance/instance';
import { GetFaqListRes } from 'types/faq/remote';

export const getFaqList = async () => {
  const { data } = await sinabro.get<GetFaqListRes>('/questions');
  return data;
};
