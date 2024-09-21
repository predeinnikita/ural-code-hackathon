import { FC } from "react";
import Grid from "@mui/material/Grid2";
import { VacancyListFilter } from "./components/vacancy-list-filter";
import { VacancyList } from "./components/vacancy-list";
import { SearchInput } from "../../components/search-input";

export const VacancyListPage: FC = () => {
  return (
    <Grid container size={12}>
      <Grid size={4} sx={{ pr: "16px" }}>
        <VacancyListFilter />
      </Grid>
      <Grid container size={8} spacing={2}>
        <Grid size={12}>
          <SearchInput />
        </Grid>
        <Grid size={12}>
          <VacancyList />
        </Grid>
      </Grid>
    </Grid>
  );
};
