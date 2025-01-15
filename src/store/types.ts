import { Todo } from "../models/Todo";

export interface TodoState {
  todos: Todo[];
}

export interface RootState {
  todos: TodoState;
}
