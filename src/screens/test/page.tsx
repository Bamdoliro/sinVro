import React from 'react';
import { SwitchCase } from '@toss/react';
import ExplainPage from './explain/page';
import QuestionPage from './question/page';
import FinishPage from './finish/page';
import { useTestStepValue } from 'stores/test/testStep';

const TestPage = () => {
  const testStep = useTestStepValue();

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
