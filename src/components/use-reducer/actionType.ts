export enum ActionType {
   DECREMENT = "decrement",
   INCREMENT = "increment",
}

interface DecrementAction {
   type: ActionType.DECREMENT;
   payload: number;
}

interface IncrementAction {
   type: ActionType.INCREMENT;
   payload: number;
}

export type CounterAction =
   | DecrementAction
   | IncrementAction;