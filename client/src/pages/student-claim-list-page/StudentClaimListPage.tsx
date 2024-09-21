import { FC } from "react";
import Grid from "@mui/material/Grid2";
import { SearchInput } from "../../components/search-input";
import { StudentClaimList } from "./components/student-claim-list";

export const StudentClaimListPage: FC = () => {
  return (
    <Grid container size={12} spacing={2}>
      <Grid size={12}>
        <SearchInput />
      </Grid>
      <Grid size={12}>
        <StudentClaimList />
      </Grid>
    </Grid>
  );
};
