import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문13');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문11');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
