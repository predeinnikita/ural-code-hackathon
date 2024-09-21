import { FC } from "react";
import Grid from "@mui/material/Grid2";
import { SearchInput } from "../../components/search-input";
import { StudentClaimList } from "./components/student-claim-list";
import Typography from "@mui/material/Typography";

export const StudentClaimListPage: FC = () => {
  return (
    <Grid container size={12} spacing={2}>
      <Grid size={12}>
        <Typography variant="h5" fontWeight="medium" sx={{ mb: "16px" }}>
          Список
        </Typography>
      </Grid>
      <Grid size={12}>
        <SearchInput />
      </Grid>
      <Grid size={12}>
        <StudentClaimList />
      </Grid>
    </Grid>
  );
};
