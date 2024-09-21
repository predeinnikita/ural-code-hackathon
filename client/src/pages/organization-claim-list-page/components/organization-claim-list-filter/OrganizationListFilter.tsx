import { FC, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  CustomAutocompleteSelect,
  CustomAutocompleteSelectItem,
} from "../../../../components/custom-autocomplete-select";

export const OrganizationListFilter: FC<any> = () => {
  const [vuz, setVuz] = useState<CustomAutocompleteSelectItem[]>([
    { title: "УрФУ", value: "1" },
    { title: "Не УрФУ", value: "2" },
    { title: "Не УрФУ", value: "3" },
  ]);
  const [exp, setExp] = useState<CustomAutocompleteSelectItem[]>([
    { title: "От 1 года", value: "1" },
    { title: "От 2 лет", value: "2" },
    { title: "От 3 лет", value: "3" },
  ]);
  const [specialities, setSpecialities] = useState<
    CustomAutocompleteSelectItem[]
  >([
    { title: "Дебил 1", value: "1" },
    { title: "Дебил 2", value: "2" },
    { title: "Дебил 3", value: "3" },
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
