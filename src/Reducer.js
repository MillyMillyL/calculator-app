import { ACTIONS } from "./Actions";
import Evaluate from "./Evaluate";

export const Reducer = (state, act) => {
  switch (act.type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentValue: act.payload,
          overwrite: false,
        };
      }
      if (act.payload === "0" && state.currentValue === "0") return state;
      if (act.payload === "." && state.currentValue.includes(".")) return state;
      return {
        ...state,
        currentValue: `${state.currentValue || ""}${act.payload}`,
      };
    case ACTIONS.RESET:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentValue: null,
        };
      }
      if (state.currentValue == null) return state;
      if (state.currentValue.length === 1) {
        return { ...state, currentValue: null };
      }
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1),
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentValue == null && state.previousValue == null)
        return state;
      if (state.currentValue == null) {
        return { ...state, operator: act.payload };
      }
      if (state.previousValue == null) {
        return {
          ...state,
          previousValue: state.currentValue,
          operator: act.payload,
          currentValue: null,
        };
      }
      return {
        ...state,
        previousValue: Evaluate(state),
        operator: act.payload,
        currentValue: null,
      };
    case ACTIONS.EVALUATE:
      if (
        state.currentValue == null ||
        state.operator == null ||
        state.previousValue == null
      ) {
        return state;
      }

      return {
        ...state,
        currentValue: Evaluate(state),
        overwrite: true,
        previousValue: null,
        operator: null,
      };
  }
};
