import { actionTypes } from '../../constants';
import phases from '../../constants/phases.json';

export const defaultState = phases;

export default (
  state = defaultState,
  { type, payload }: { type: string; payload: any },
) => {
  switch (type) {
    case actionTypes.TOGGLE_STEP:
      return { ...state, ...payload };
    case actionTypes.COMPLETE_PHASE:
      return { ...state, ...payload };
    case actionTypes.DISPLAY_FACT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
