import { FC, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  CustomAutocompleteSelect,
  CustomAutocompleteSelectItem,
} from "../../../../components/custom-autocomplete-select";

export const OrganizationListFilter: FC<any> = () => {
  const [vuz, setVuz] = useState<CustomAutocompleteSelectItem[]>([
    { title: "УрФУ", value: "1" },
    { title: "УРГАХУ", value: "2" },
    { title: "УРГУПС", value: "3" },
  ]);
  const [exp, setExp] = useState<CustomAutocompleteSelectItem[]>([
    { title: "До 1 года", value: "1" },
    { title: "От 1 до 3 лет", value: "2" },
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
        <CustomAutocompleteSelect label={"ВУЗ"} items={vuz} />
      </Grid>
      <Grid size={12}>
        <CustomAutocompleteSelect label={"Опыт"} items={exp} />
      </Grid>
      <Grid size={12}>
        <CustomAutocompleteSelect
          label={"Специальность"}
          items={specialities}
        />
      </Grid>
    </Grid>
  );
};
