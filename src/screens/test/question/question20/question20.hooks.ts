import { useSetQuestionStep } from 'stores/test/questionStep';
import { useSetTestStep } from 'stores/test/testStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();
  const setTestStep = useSetTestStep();

  const handleMoveNextStep = () => {
    setTestStep('제출');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문19');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
