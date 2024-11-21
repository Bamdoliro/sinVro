import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문14');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문12');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
