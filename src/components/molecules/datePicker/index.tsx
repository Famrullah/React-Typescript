import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

interface IProps {
  value?: any
  setValue: (e: any) => void
  className?: string
}

export const DateRangePicker: React.FC<IProps> = (Props) => {
  return (
    <div className="flex mr-2">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDateRangePicker
          value={Props.value}
          onChange={(newValue) => {
            Props.setValue(newValue)
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  )
}
