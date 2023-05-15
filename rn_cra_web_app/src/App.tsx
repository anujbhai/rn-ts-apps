import React, { useState } from 'react'
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native'

import styles from './app.styles'
import DateTimePicker from './components/datetimepicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import WebDateTimePickerElement from './components/web-datetimepicker'

const App = () => {
  const [dateObj, setDateObj] = useState<Date>(new Date(1598051730000))
  const [mode, setMode] = useState<string>('date')
  const [show, setShow] = useState<boolean>(false)

  const handleDateChange = (selectedDate: Date) => {
    setDateObj(selectedDate)
  }

  const showMode = (currentMode: string) => {
    if (Platform.OS === 'android') {
      setShow(false)
    }

    setMode(currentMode)
  }

  const showDatePicker = () => {
    showMode('date')
    setShow(true)
  }

  const showTimePicker = () => {
    showMode('time')
    setShow(true)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SafeAreaView>
        <StatusBar />

        <View>
          <Text style={styles.rootContainer}>Hello World</Text>
        </View>

        <View>
          {Platform.OS === 'web' ? (
            <WebDateTimePickerElement onDateChange={handleDateChange} />
          ) : (
            <DateTimePicker
              date={dateObj}
              mode={mode}
              show={show}
              showDatePicker={showDatePicker}
              showTimePicker={showTimePicker}
              onChange={handleDateChange}
            />
          )}
        </View>
      </SafeAreaView>
    </LocalizationProvider>
  )
}

export default App
