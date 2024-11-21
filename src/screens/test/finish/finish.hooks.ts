import { useSetTestStep } from 'stores/test/testStep';

export const useCTAButton = () => {
  const setTestStep = useSetTestStep();

  const handleMovePreviousStep = () => {
    setTestStep('질문');
  };

  return { handleMovePreviousStep };
};
