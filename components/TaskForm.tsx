import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'

interface TaskFormProps {
  title: string
  description: string
  onTitleChange: (text: string) => void
  onDescriptionChange: (text: string) => void
  onSubmit: () => void
}

export const TaskForm: React.FC<TaskFormProps> = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onSubmit,
}) => {
  const titleInputRef = React.useRef<TextInput>(null)
  const descriptionInputRef = React.useRef<TextInput>(null)

  const handleTitleSubmit = () => {
    descriptionInputRef.current?.focus()
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onTitleChange}
          ref={titleInputRef}
          value={title}
          returnKeyType="next"
          onSubmitEditing={handleTitleSubmit}
          keyboardType="default"
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descr:</Text>
        <TextInput
          ref={descriptionInputRef}
          style={styles.input}
          onChangeText={onDescriptionChange}
          value={description}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingRight: 70,
  },
  label: {
    marginRight: 10,
    minWidth: 40,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'navy',
    padding: 15,
    borderRadius: 5,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -25 }],
    width: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    width: '90%',
    marginTop: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'green',
    marginRight: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDescription: {
    color: '#666',
  },
  deleteButton: {
    backgroundColor: 'darkred',
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 80,
  },
})
