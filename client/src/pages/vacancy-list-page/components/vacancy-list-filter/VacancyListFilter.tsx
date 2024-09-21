import { FC, useState } from "react";
import Grid from "@mui/material/Grid2";
import { SalarySlider } from "../salary-slider";
import {
  CustomAutocompleteSelect,
  CustomAutocompleteSelectItem,
} from "../../../../components/custom-autocomplete-select";
import {
  CustomRadioGroup,
  CustomRadioGroupItem,
} from "../../../../components/custom-radio-group";
import {
  CustomCheckboxGroup,
  CustomCheckboxGroupItem,
} from "../../../../components/custom-checkbox-group";

export const VacancyListFilter: FC<any> = () => {
  const [work, setWork] = useState<CustomRadioGroupItem[]>([
    { title: "Полный рабочий день", value: "1" },
    { title: "Неполный рабочий день", value: "2" },
    { title: "По выходным", value: "3" },
    { title: "По вечерам", value: "4" },
    { title: "От 4 часов в день", value: "5" },
  ]);
  const [expWork, setExpWork] = useState<CustomCheckboxGroupItem[]>([
    { title: "От 1 года", value: "1" },
    { title: "От 2 лет", value: "2" },
    { title: "От 3 лет", value: "3" },
  ]);
  const [specialities, setSpecialities] = useState<
    CustomAutocompleteSelectItem[]
  >([
    { title: "Frontend", value: "1" },
    { title: "Backend", value: "2" },
    { title: "Design", value: "3" },
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
        <CustomRadioGroup label={"Опыт работы"} items={expWork} />
      </Grid>
      <Grid size={12}>
        <CustomCheckboxGroup label={"График работы"} items={work} />
      </Grid>
      <Grid size={12}>
        <SalarySlider label={"Зарплата"} />
      </Grid>
    </Grid>
  );
};
