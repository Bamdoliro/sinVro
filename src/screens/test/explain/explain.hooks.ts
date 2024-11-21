import { useSetTestStep } from 'stores/test/testStep';

export const useCTAButton = () => {
  const setTestStep = useSetTestStep();

  const handleMoveNextStep = () => {
    setTestStep('질문');
  };

  return { handleMoveNextStep };
};
