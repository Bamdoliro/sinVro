import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문20');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문18');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
