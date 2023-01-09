import { SelectChangeEvent } from "@mui/material/Select";
import {
  MenuItem,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  Select,
} from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface PropTypes {
  name: string;
  value: string | number | string[];
  options: any[];
  label: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  state: string | number | string[];
  setId?: boolean;
  onChange?: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClose?: (event: React.SyntheticEvent<Element, Event>) => void;
}

export default function MultipleSelectCheckmarks({
  label,
  name,
  onChange,
  options,
  value,
  disabled,
  onBlur,
  onClose,
  required,
  setId,
}: PropTypes) {
  const [valueState, setValueState] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof valueState>) => {
    const value = event.target.value as any;
    console.log("aqui", value);
    setValueState(typeof value.name === "string" ? value.split(",") : value);

    if (setId) {
    }
  };

  // console.log(valueState);

  return (
    <FormControl
      fullWidth
      required={required}
      disabled={disabled}
      variant="standard"
    >
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={valueState}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options.map((item) => (
          <MenuItem key={item.name} value={item}>
            <Checkbox checked={valueState.indexOf(item.name) > -1} />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
