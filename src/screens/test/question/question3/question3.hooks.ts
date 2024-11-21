import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문4');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문2');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
