import { FC, useState } from "react";
import { CustomAutocompleteSelect, CustomAutocompleteSelectItem } from "../../../components/custom-autocomplete-select";

export const StudentsFilter: FC = () => {

const [years, setYears] = useState<
    CustomAutocompleteSelectItem[]
  >([
    { title: "2019", value: "2019" },
    { title: "2020", value: "2020" },
    { title: "2021", value: "2021" },
    { title: "2022", value: "2022" },
    { title: "2023", value: "2023" },
    { title: "2023", value: "2024" },
  ]);

  return <div>
    <h2>Фильтр</h2>
    <CustomAutocompleteSelect
      label={"Год"}
      items={years}
    />
    
  </div>;
};
