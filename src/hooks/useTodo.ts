import {useState} from 'react'

export const useTodo = () => {
  const [todos, setTodos] = useState(null)

  const addTodo = (text: string) => {
    console.log('addTodo')
  }

  const deleteTodo = () => {
    console.log('deleteTodo')
  }

  return {
    todos,
    addTodo,
    deleteTodo,
  }
}
