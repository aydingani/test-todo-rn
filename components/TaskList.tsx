import { FlatList, ScrollView, StyleSheet } from 'react-native'
import { TaskItem } from './TaskItem'

interface Task {
  id: string
  title: string
  description: string
}

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (id: string) => void
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  const renderItem = ({ item }: { item: Task }) => (
    <ScrollView>
      <TaskItem
        title={item.title}
        description={item.description}
        onDelete={() => onDeleteTask(item.id)}
      />
    </ScrollView>
  )

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
      contentContainerStyle={styles.listContent}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: '90%',
    marginTop: 20,
  },
  listContent: {
    paddingBottom: 80,
  },
})
