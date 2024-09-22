import { FC } from "react";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Checkbox } from "@mui/material";

import styles from "./CustomCheckboxGroup.module.scss";

export const CustomCheckboxGroup: FC<CustomCheckboxGroupProps> = ({
  label,
  items,
}) => {
  return (
    <FormControl>
      <FormLabel sx={{ fontSize: "14px" }}>{label}</FormLabel>
      <RadioGroup>
        {items.map((item: CustomCheckboxGroupItem, index: number) => {
          return (
            <FormControlLabel
              key={index}
              label={item.title}
              value={item.value}
              control={<Checkbox size="small" />}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export interface CustomCheckboxGroupProps {
  label: string;
  items: CustomCheckboxGroupItem[];
}

export interface CustomCheckboxGroupItem {
  title: string;
  value: string;
}
