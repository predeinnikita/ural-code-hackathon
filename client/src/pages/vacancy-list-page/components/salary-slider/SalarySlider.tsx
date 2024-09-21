import { FC } from "react";
import { Slider } from "@mui/material";
import styles from "./SalarySlider.module.scss";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

export const SalarySlider: FC<SalarySliderProps> = ({ label }) => {
  return (
    <FormControl sx={{ width: "100%", maxWidth: '200px' }}>
      <FormLabel sx={{ fontSize: '14px' }}>{label}</FormLabel>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        size="small"
      />
    </FormControl>
  );
};

export interface SalarySliderProps {
  label: string;
}
