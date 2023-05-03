import React, { useState, useEffect } from 'react'
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './App.styles'
import colors from '../../constants/colors'

interface ITodo {
  id: number,
  task: string,
  complete: boolean
}

interface ITodoItemProps {
  todo: ITodo,
}

function App(): JSX.Element {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    getTodosFromDevice()
  }, [])

  useEffect(() => {
    saveTodosToDevice(todos);
  }, [todos])

  const ListItem = ({ todo }: ITodoItemProps) => {
    return <View style={ styles.listItem }>
      <View style={ styles.listItemTextContent }>
        <Text
          style={
            todo.complete
              ? styles.listItemTextCompleted
              : styles.listItemText
          }
        >{ todo?.task }</Text>
      </View>
    
      { !todo?.complete && (
        <TouchableOpacity
          style={ [styles.actionIcon] }
          onPress={ () => markTodoComplete(todo?.id) }
        >
          <Icon
            name="done"
            size={ 20 }
            color={ colors.white }
          />
        </TouchableOpacity>
      ) }
    
      <TouchableOpacity
        style={ [styles.actionIcon, { backgroundColor: colors.red }] }
        onPress={ () => deleteTodo(todo?.id) }
      >
        <Icon
          name="delete"
          size={ 20 }
          color={ colors.white }
        />
      </TouchableOpacity>
    </View>
  }

  const addTodo = () => {
    const currentDate: Date = new Date()
    const currentNumber: number = currentDate.getTime()

    if (inputText === '') {
      Alert.alert('Error', 'Please type your todo text!')
    } else {
      const newTodo = {
        id: currentNumber,
        task: inputText,
        complete: false,
      }

      setTodos([...todos, newTodo])
      setInputText('')
    }
  }
  
  const markTodoComplete = (todoId: number) => {
    const newTodos = todos.map(item => {
      if (item.id == todoId) {
        return { ...item, complete: true }
      }

      return item
    })

    setTodos(newTodos)
  }

  const deleteTodo = (todoId: number) => {
    const newTodos = todos.filter(item => item.id !== todoId)

    setTodos(newTodos)
  }

  const clearTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [{
      text: 'Yes',
      onPress: () => setTodos([]),
    }, {
      text: 'No'
    }])
  }

  const saveTodosToDevice = async (todos: ITodo[]) => {
    try {
      const jsonValue = JSON.stringify(todos)
      await AsyncStorage.setItem('todos', jsonValue)
    } catch (err) {
      console.log(err)
    }
  }

  const getTodosFromDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos')

      if (todos !== null) {
        setTodos(JSON.parse(todos))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <SafeAreaView style={ styles.SafeAreaViewStyles }>
      <View style={ styles.header }>
        <Text style={ styles.headerText }>Todo App</Text>

        <Icon
          name="delete"
          size={ 25 }
          color={ colors.red }
          onPress={ () => clearTodos() }
        />
      </View>

      <FlatList
        data={ todos }
        showsVerticalScrollIndicator={ false }
        contentContainerStyle={ styles.flatListItem }
        renderItem={ ({ item }) => (
            <ListItem todo={ item } />
          )
        }
        keyExtractor={ item => item.id.toString() }
      />

      <View style={ styles.footer }>
        <View style={ styles.inputContainer }>
          <TextInput
            placeholder='Add todo'
            onChangeText={ text => setInputText(text) }
            value={ inputText }
          />
        </View>

        <TouchableOpacity onPress={ addTodo }>
          <View style={ styles.iconContainer }>
            <Icon
              name="add"
              size={ 30 }
              color={ colors.white }
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App
