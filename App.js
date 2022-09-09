import React, { useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { CustomModal, AddTask, TaskList } from './components/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5fa',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16
  },
  modalMessageContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 14,
  },
  selectedTask: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
});


export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  {/* in progress */}
  const [searc, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  {/* in progress */}

  const onHandleChangeText = (text) => {
    setTask(text);
  };

  const addItem = () => {
    if(task !== ''){
      setTasks((prevTasks) => [
        ...prevTasks,
      { id: Date.now(), value: task },
      ]);
      setTask('');
    }else{
      console.warn('text needed!');
    };

  };

  const onHandleModal = (id) => {
    //console.warn('ID =>', id);
    setModalVisible(!modalVisible);
    //console.warn('ALL TASKS=>', tasks)
    setSelectedTask(tasks.find((item) => item.id === id))
  };


  const onHandleDeleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    setSelectedTask(null);
    setModalVisible(!modalVisible);
  };


  {/* in progress */}
  const handleEditTask = (id, value) => {
    //console.warn(id)
    //console.warn(value)

    const index = tasks.findIndex((task) => task.id === id);
    if (index >= 0) {
      const taskList = tasks.map((task) => ({ ...task }));
      taskList[index].value = value;
      setTasks(taskList);
    }
  };
  {/* in progress */}

  return (
    <View style={styles.container}>

      <AddTask
        item={task}
        onChangeText={onHandleChangeText}
        placeholder={'Task here...'}
        onPressButton={addItem}
      />
 
      <TaskList
        data={tasks}
        onPressButton={onHandleModal}
        showsVerticalScrollIndicator={false}
      />
       

      <CustomModal animationType='slide' visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Entry:</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.modalMessage}>Delete?</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title='Delete'
            onPress={() => onHandleDeleteItem(selectedTask?.id)}
            color='#4A306D'
          />
          <Button 
            title='Cancel'
            onPress={() => setModalVisible(!modalVisible)}
            color='#cccccc'
          />
        </View>
      </CustomModal>
      
    </View>
  );
}