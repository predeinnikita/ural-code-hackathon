import { FC } from "react";
import Grid from "@mui/material/Grid2";
import { VacancyListFilter } from "./components/vacancy-list-filter";
import { VacancyListItem } from "./components/vacancy-list-item";
import Stack from "@mui/material/Stack";
import { SearchInput } from "./components/search-input";
import { VacancyList } from "./components/vacancy-list";

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
