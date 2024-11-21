import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문9');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문7');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
