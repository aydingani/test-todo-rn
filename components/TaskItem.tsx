import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface TaskItemProps {
  title: string
  description: string
  onDelete: () => void
}

export const TaskItem: React.FC<TaskItemProps> = ({
  title,
  description,
  onDelete,
}) => (
  <View style={styles.taskItem}>
    <View style={styles.taskContent}>
      <View style={styles.dot} />
      <View>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.deleteButtonText}>X</Text>
    </TouchableOpacity>
  </View>
)

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
