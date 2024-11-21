import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문11');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문9');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
