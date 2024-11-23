import { CharacterCategoryData, CharacterDescribeData } from './client';

export const characterData: CharacterDescribeData[] = [
  {
    type: 'heon',
    description:
      '어떤 이유에서인지 친구가 없는 이 고양이는\n항상 외로움을 타지만 경계심이 강해요.',
  },
  {
    type: 'sol',
    description:
      '#16 행성에서 이 토끼의 존재를 모르는 생명체는\n없을 정도로 명량한 이 토끼는 이젠 지구에서도\n친구를 만들고 싶어 편지를 보내려해요.',
  },
];

export const Heon: CharacterCategoryData[] = [
  { id: '1', text: '#27 행성' },
  { id: '2', text: '내향적' },
  { id: '3', text: '비밀을 숨긴' },
  { id: '4', text: '친해지기가 어려운' },
  { id: '5', text: '슬픔' },
  { id: '6', text: '집돌이' },
];

export const Sol: CharacterCategoryData[] = [
  { id: '1', text: '#16 행성' },
  { id: '2', text: '외향적' },
  { id: '3', text: '행복' },
  { id: '4', text: '정의감' },
  { id: '5', text: '여행 좋아' },
  { id: '6', text: '약속 잡기 대장' },
  { id: '7', text: '내가 할게!' },
];

export interface SelectCharacter {
  type: string;
}
