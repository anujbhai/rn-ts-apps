import React from 'react'
import { Button, Text, View } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

export interface IDateTimePickerElementProps {
  date: Date
  mode?: any
  show: boolean
  showDatePicker: () => void
  showTimePicker: () => void
  onChange: (event: DateTimePickerEvent, date: Date) => void
}

const DateTimePickerElement: React.FC<IDateTimePickerElementProps> = ({
  date,
  mode,
  show,
  showDatePicker,
  showTimePicker,
  onChange,
}: IDateTimePickerElementProps) => {
  return (
    <View>
      <Button onPress={showDatePicker} title="Show date picker!" />
      <Button onPress={showTimePicker} title="Show time picker!" />

      <Text>selected: {date.toLocaleString()} </Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default DateTimePickerElement
