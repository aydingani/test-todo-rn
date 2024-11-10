import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

interface Task {
  id: string
  title: string
  description: string
}

export default function App() {
  const [title, setTitle] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const [tasks, setTasks] = React.useState<Task[]>([])

  const handleAdd = () => {
    if (title.trim() && description.trim()) {
      const newTask = {
        id: Date.now().toString(),
        title: title.trim(),
        description: description.trim(),
      }
      setTasks([...tasks, newTask])
      setTitle('')
      setDescription('')
    }
  }

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <TaskForm
        title={title}
        description={description}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onSubmit={handleAdd}
      />
      <TaskList tasks={tasks} onDeleteTask={handleDelete} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
