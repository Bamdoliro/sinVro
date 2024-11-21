import { useSetQuestionStep } from 'stores/test/questionStep';
import { useSetTestStep } from 'stores/test/testStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();
  const setTestStep = useSetTestStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문2');
  };

  const handleMovePreviousStep = () => {
    setTestStep('설명');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
