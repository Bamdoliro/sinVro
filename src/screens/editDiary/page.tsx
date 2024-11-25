import { SwitchCase } from '@toss/react';
import React from 'react';
import { useDiaryStepValue } from 'stores/diary/diaryStep';
import EditWritePage from './write/page';
import { RouteProp } from '@react-navigation/native';
import EditSelectEmotionPage from './select/page';
import { RootStackParamList } from 'navigation/navigationType';

type CheckDiaryPageRouteProp = RouteProp<RootStackParamList, 'EditDiary'>;

const EditDiaryPage = ({ route }: { route: CheckDiaryPageRouteProp }) => {
  const diaryStep = useDiaryStepValue();

  return (
    <>
      <SwitchCase
        value={diaryStep}
        caseBy={{
          일기: <EditWritePage route={route} />,
          감정: <EditSelectEmotionPage route={route} />,
        }}
        defaultComponent={<EditWritePage route={route} />}
      />
    </>
  );
};

export default EditDiaryPage;
