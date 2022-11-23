import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent
} from '@mui/material'
import { useState } from 'react'

interface SelectProps {
  name: string
  value: string | number | string[] | number[]
  array: any[]
  label: React.ReactNode
  required?: boolean
  disabled?: boolean
  setId?: boolean
  onChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onClose?: (event: React.SyntheticEvent<Element, Event>) => void
  isMultiple?: boolean
}

export function Select({
  array,
  label,
  name,
  disabled,
  onBlur,
  onClose,
  required,
  setId,
  value,
  onChange,
  isMultiple
}: SelectProps) {
  const [personName, setPersonName] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const value = event.target.value
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <FormControl
      fullWidth
      required={required}
      disabled={disabled}
      variant="standard"
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        name={name}
        value={value}
        label={label}
        onChange={isMultiple ? handleChange : onChange}
        onBlur={onBlur}
        onClose={onClose}
        multiple={isMultiple}
      >
        <MenuItem value="">
          <em>Selecione</em>
        </MenuItem>
        {array?.map(item =>
          isMultiple ? (
            <MenuItem
              key={item.id ?? item.name}
              value={setId ? item.id : item.name}
            >
              <Checkbox checked={personName.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ) : (
            <MenuItem
              key={item.id ?? item.name}
              value={setId ? item.id : item.name}
              id={setId ? item.id : item.name}
            >
              {item.name}
            </MenuItem>
          )
        )}
      </MuiSelect>
    </FormControl>
  )
}
