import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";

interface SelectProps {
  name: string;
  value: string | number | string[];
  stateMultiple: string[];
  array: any[];
  label: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  setId?: boolean;
  onChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClose?: (event: React.SyntheticEvent<Element, Event>) => void;
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
}: SelectProps) {
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
        value={value || ""}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        onClose={onClose}
      >
        <MenuItem value="">
          <em>Selecione</em>
        </MenuItem>
        {array.length &&
          array?.map((item) => (
            <MenuItem
              key={item.id ?? item.name}
              value={setId ? item.id : item.name}
              id={setId ? item.id : item.name}
            >
              {item.name}
            </MenuItem>
          ))}
      </MuiSelect>
    </FormControl>
  );
}
