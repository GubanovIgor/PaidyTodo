import { Todo } from "../models/Todo";

export interface TodoState {
  todos: Todo[];
}

export interface AuthState {
  isLoggedIn: boolean;
  userToken: string | null;
}

export interface RootState {
  todos: TodoState;
  auth: AuthState;
}
