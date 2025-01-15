import React, { useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { TodoScreenNavigationProp } from "../../navigation/types";
import { useTodoViewModel } from "./useTodoViewModel";
import { TodoItem } from "../../components/TodoItem";

interface TodoScreenProps {
  navigation: TodoScreenNavigationProp;
}

export const TodoScreen: React.FC<TodoScreenProps> = ({ navigation }) => {
  const [text, setText] = useState("");
  const { todos, handleAddTodo, handleDeleteTodo, handleEditTodo } =
    useTodoViewModel();

  const handleAdd = () => {
    if (text.trim()) {
      handleAddTodo(text);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Todo" onPress={handleAdd} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onDelete={() => handleDeleteTodo(item.id)}
            onEdit={(newText: string) => handleEditTodo(item.id, newText)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
  },
});
