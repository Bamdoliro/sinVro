import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문3');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문1');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
