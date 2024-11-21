import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문15');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문13');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
