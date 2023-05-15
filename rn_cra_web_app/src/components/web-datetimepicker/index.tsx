import React, { useState } from 'react'
// import { TextField } from '@mui/material'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'

interface IWebDateTimePickerProps {
  onDateChange: (date: Date) => void
}

const WebDateTimePickerElement: React.FC<IWebDateTimePickerProps> = ({
  onDateChange,
}) => {
  const [date, setDate] = useState<Date | null>(null)

  const handleDateChange = (selectedDate: Date | null) => {
    if (selectedDate) {
      setDate(selectedDate)
      onDateChange(selectedDate)
    }
  }

  return (
    <>
      <MobileDateTimePicker
        label="Select Date"
        value={date}
        onChange={handleDateChange}
        // renderInput={(params) => <TextField {...params} />}
      />
    </>
  )
}

export default WebDateTimePickerElement
