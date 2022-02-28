// Route Names
export const PROGRESS = 'My startup progress';

// Redux Types
export const actionTypes = {
  TOGGLE_STEP: 'TOGGLE_STEP',
  COMPLETE_PHASE: 'COMPLETE_PHASE',
  DISPLAY_FACT: 'DISPLAY_FACT',
};

// App-wide types
export type Step = {
  name: string;
  completed: boolean;
};

export type Phase = {
  title: string;
  steps: Step[];
  completed: boolean;
  index: number;
};
