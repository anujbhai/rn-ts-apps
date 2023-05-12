import React, { useState } from 'react'
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native'

import styles from './app.styles'
import DateTimePicker from './components/datetimepicker'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

const App = () => {
  const [dateObj, setDateObj] = useState<Date>(new Date(1598051730000))
  const [mode, setMode] = useState<string>('date')
  const [show, setShow] = useState<boolean>(false)

  const onChange = (event: DateTimePickerEvent, date: Date) => {
    const currentDate = date

    console.log('event:', event)

    setShow(false)
    setDateObj(currentDate)
  }

  const showMode = (currentMode: string) => {
    if (Platform.OS === 'android') {
      setShow(false)
    }

    setMode(currentMode)
  }

  const showDatePicker = () => {
    showMode('date')
  }

  const showTimePicker = () => {
    showMode('time')
  }

  return (
    <SafeAreaView>
      <StatusBar />

      <View>
        <Text style={styles.rootContainer}>Hello World</Text>
      </View>

      <View>
        <DateTimePicker
          date={dateObj}
          mode={mode}
          show={show}
          showDatePicker={showDatePicker}
          showTimePicker={showTimePicker}
          onChange={onChange}
        />
      </View>
    </SafeAreaView>
  )
}

export default App
