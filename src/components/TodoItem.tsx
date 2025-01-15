import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

interface TodoItemProps {
  item: { id: string; text: string };
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleSave = () => {
    onEdit(editText);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={editText}
          onChangeText={setEditText}
        />
      ) : (
        <Text style={styles.text}>{item.text}</Text>
      )}
      <View style={styles.buttons}>
        {isEditing ? (
          <Button title="Save" onPress={handleSave} />
        ) : (
          <Button title="Edit" onPress={() => setIsEditing(true)} />
        )}
        <Button title="Delete" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 4,
  },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },
});
