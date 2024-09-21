import { FC, useState } from "react";
import { CustomAutocompleteSelect } from "../custom-autocomplete-select";
import Grid from "@mui/material/Grid2";

import styles from "./VacancyListFilter.module.scss";
import { CustomRadioGroup, CustomRadioGroupItem } from "../custom-radio-group";
import { Slider } from "@mui/material";
import { SalarySlider } from "../salary-slider";

export const VacancyListFilter: FC<any> = () => {
  const [work, setWork] = useState<CustomRadioGroupItem[]>([
    { title: "25/8", value: "1" },
    { title: "2/2", value: "2" },
    { title: "4/5", value: "3" },
  ]);
  const [expWork, setExpWork] = useState<CustomRadioGroupItem[]>([
    { title: "От 1 года", value: "1" },
    { title: "От 2 лет", value: "2" },
    { title: "От 3 лет", value: "3" },
  ]);
  const [specialities, setSpecialities] = useState<CustomRadioGroupItem[]>([
    { title: "Дебил 1", value: "1" },
    { title: "Дебил 2", value: "2" },
    { title: "Дебил 3", value: "3" },
  ]);

  return (
    <Grid container spacing={1}>
      <Grid size={12}>
        <CustomAutocompleteSelect
          label={"Специальность"}
          items={specialities}
        />
      </Grid>
      <Grid size={12}>
        <CustomRadioGroup label={"График работы"} items={work} />
      </Grid>
      <Grid size={12}>
        <CustomRadioGroup label={"Опыт работы"} items={expWork} />
      </Grid>
      <Grid size={12}>
        <SalarySlider label={"Зарплата"} />
      </Grid>
    </Grid>
  );
};
