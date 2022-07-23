import { ActionType, CounterAction } from "./actionType";

export interface CounterState {
   count: number;
}

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
   switch (action.type) {
      case ActionType.INCREMENT:
         return { ...{ state }, count: state.count + action.payload };
      case ActionType.DECREMENT:
         return { ...{ state }, count: state.count - action.payload };
      default:
         return state;
   }
};