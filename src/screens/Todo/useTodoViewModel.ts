import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../../store/todoSlice";
import { RootState } from "../../store/types";

export const useTodoViewModel = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id: string, text: string) => {
    dispatch(editTodo({ id, text }));
  };

  return {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
  };
};
