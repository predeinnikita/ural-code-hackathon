import { FC, PropsWithChildren } from "react";
import styles from "./AppContainer.module.scss";
import { AppHeader } from "../app-header";
import Grid from "@mui/material/Grid2";
import { AppFooter } from "../app-footer";

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid spacing={2}>
      <Grid size={12} sx={{ mb: "16px" }}>
        <AppHeader />
      </Grid>
      <Grid size={12}>
        <div className={styles.wrapper}>
          <div className={styles.main}>{children}</div>
        </div>
      </Grid>
      <Grid size={12} sx={{ mt: "16px" }}>
        <AppFooter />
      </Grid>
    </Grid>
  );
};
