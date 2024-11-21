import { useSetQuestionStep } from 'stores/test/questionStep';

export const useCTAButton = () => {
  const setQuestionStep = useSetQuestionStep();

  const handleMoveNextStep = () => {
    setQuestionStep('질문6');
  };

  const handleMovePreviousStep = () => {
    setQuestionStep('질문4');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
