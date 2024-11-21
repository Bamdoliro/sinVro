import { SwitchCase } from '@toss/react';
import React from 'react';
import { useQuestionStepValue } from 'stores/test/questionStep';
import Question1Page from './question1/page';
import Question2Page from './question2/page';
import Question3Page from './question3/page';
import Question4Page from './question4/page';
import Question5Page from './question5/page';
import Question6Page from './question6/page';
import Question7Page from './question7/page';
import Question8Page from './question8/page';
import Question9Page from './question9/page';
import Question10Page from './question10/page';
import Question11Page from './question11/page';
import Question12Page from './question12/page';
import Question13Page from './question13/page';
import Question14Page from './question14/page';
import Question15Page from './question15/page';
import Question16Page from './question16/page';
import Question17Page from './question17/page';
import Question18Page from './question18/page';
import Question19Page from './question19/page';
import Question20Page from './question20/page';

const QuestionPage = () => {
  const questionStep = useQuestionStepValue();

  return (
    <>
      <SwitchCase
        value={questionStep}
        caseBy={{
          질문1: <Question1Page />,
          질문2: <Question2Page />,
          질문3: <Question3Page />,
          질문4: <Question4Page />,
          질문5: <Question5Page />,
          질문6: <Question6Page />,
          질문7: <Question7Page />,
          질문8: <Question8Page />,
          질문9: <Question9Page />,
          질문10: <Question10Page />,
          질문11: <Question11Page />,
          질문12: <Question12Page />,
          질문13: <Question13Page />,
          질문14: <Question14Page />,
          질문15: <Question15Page />,
          질문16: <Question16Page />,
          질문17: <Question17Page />,
          질문18: <Question18Page />,
          질문19: <Question19Page />,
          질문20: <Question20Page />,
        }}
        defaultComponent={<Question1Page />}
      />
    </>
  );
};

export default QuestionPage;
