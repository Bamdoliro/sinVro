import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문10');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문8');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
