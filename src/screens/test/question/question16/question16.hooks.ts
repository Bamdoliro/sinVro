import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문17');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문15');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
