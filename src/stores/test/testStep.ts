import { TestStep } from 'types/test/client';
import { create } from 'zustand';

interface TestStepState {
  testStep: TestStep;
  setTestStep: (step: TestStep) => void;
}

const useTestStepStore = create<TestStepState>((set) => ({
  testStep: '설명',
  setTestStep: (step) => set({ testStep: step }),
}));

export const useTestStep = () => useTestStepStore();
export const useSetTestStep = () => useTestStepStore((state) => state.setTestStep);
export const useTestStepValue = () => useTestStepStore((state) => state.testStep);
