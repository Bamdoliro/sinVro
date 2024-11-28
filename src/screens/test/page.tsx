import React, { useEffect } from 'react';
import { SwitchCase } from '@toss/react';
import ExplainPage from './explain/page';
import QuestionPage from './question/page';
import FinishPage from './finish/page';
import { useTestStepValue } from 'stores/test/testStep';
import { useCharacterQuery } from 'services/character/quries';
import { useNavigation } from '@react-navigation/native';

const TestPage = () => {
  const testStep = useTestStepValue();
  const { data } = useCharacterQuery();
  const navigation = useNavigation();

  useEffect(() => {
    if (data?.data.type) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' as never }],
      });
    }
  }, [data?.data.type, navigation]);

  return (
    <>
      <SwitchCase
        value={testStep}
        caseBy={{ 설명: <ExplainPage />, 질문: <QuestionPage />, 제출: <FinishPage /> }}
        defaultComponent={<ExplainPage />}
      />
    </>
  );
};

export default TestPage;
