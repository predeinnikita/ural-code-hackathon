import { FC } from "react";
import Grid from "@mui/material/Grid2";
import { SearchInput } from "../../components/search-input";
import { OrganizationClaimList } from "./components/organization-claim-list";
import { OrganizationListFilter } from "./components/organization-claim-list-filter";
import Typography from "@mui/material/Typography";

export const OrganizationClaimListPage: FC = () => {
  return (
    <Grid container size={12}>
      <Grid size={4} sx={{ pr: "16px" }}>
        <Typography variant="h5" fontWeight="medium" sx={{ mb: "16px" }}>
          Фильтр
        </Typography>
        <OrganizationListFilter />
      </Grid>
      <Grid container size={8} spacing={2}>
        <Grid size={12}>
          <Typography variant="h5" fontWeight="medium" sx={{ mb: "16px" }}>
            Список
          </Typography>
        </Grid>
        <Grid size={12}>
          <SearchInput />
        </Grid>
        <Grid size={12}>
          <OrganizationClaimList />
        </Grid>
      </Grid>
    </Grid>
  );
};
