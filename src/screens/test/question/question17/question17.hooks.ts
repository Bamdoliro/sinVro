import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문18');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문16');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
