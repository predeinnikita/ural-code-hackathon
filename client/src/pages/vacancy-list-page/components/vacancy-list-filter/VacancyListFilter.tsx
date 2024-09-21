import { FC, useState } from "react";
import { CustomAutocompleteSelect } from "../custom-autocomplete-select";
import Grid from "@mui/material/Grid2";

import styles from "./VacancyListFilter.module.scss";
import {CustomRadioGroup, CustomRadioGroupItem} from "../custom-radio-group";

export const VacancyListFilter: FC<any> = () => {
  const [state, setState] = useState<CustomRadioGroupItem[]>([
      { title: 'Хуй 1', value: '1' },
      { title: 'Хуй 2', value: '2' },
      { title: 'Хуй 3', value: '3' }
  ]);

  return (
    <Grid container spacing={1}>
      <Grid size={12}>
        <CustomRadioGroup label={"График работы"} items={state} />
      </Grid>
      <Grid size={12}>
        <CustomRadioGroup label={"График работы"} items={state} />
      </Grid>
      <Grid size={12}>
        <CustomAutocompleteSelect label={"Специальность"} items={[]} />
      </Grid>
    </Grid>
  );
};
