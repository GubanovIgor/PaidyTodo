import React, {useState} from 'react'
import {View, TextInput, Button, FlatList, StyleSheet} from 'react-native'
import {useTodo} from '../hooks/useTodo'
import {TodoItem} from '../components/TodoItem'

export const TodoScreen = () => {
  const [text, setText] = useState('')
  const {todos, addTodo, deleteTodo} = useTodo()

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TodoItem item={item} onDelete={() => deleteTodo(item.id)} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
})
