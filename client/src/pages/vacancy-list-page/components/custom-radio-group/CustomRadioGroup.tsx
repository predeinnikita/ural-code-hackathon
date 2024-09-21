import { FC } from "react";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";

import styles from "./CustomRadioGroup.module.scss";

export const CustomRadioGroup: FC<CustomRadioGroupProps> = ({
  label,
  items,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup>
        {items.map((item: CustomRadioGroupItem, index: number) => {
            return <FormControlLabel key={index} label={item.title} value={item.value} control={<Radio />} />
        })}
      </RadioGroup>
    </FormControl>
  );
};

export interface CustomRadioGroupProps {
  label: string;
  items: CustomRadioGroupItem[];
}

export interface CustomRadioGroupItem {
  title: string;
  value: string;
}
