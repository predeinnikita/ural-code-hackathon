import { FC, PropsWithChildren } from "react";
import styles from "./AppContainer.module.scss";
import { AppHeader } from "../app-header";
import Grid from "@mui/material/Grid2";
import { AppFooter } from "../app-footer";
import { Breadcrumbs, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_TITLES } from "../routing/routes";

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid spacing={2}>
      <Grid size={12} sx={{ mb: "8px" }}>
        <AppHeader />
      </Grid>
      <Grid size={12}>
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <Breadcrumbs>
              {location.pathname
                .split("/")
                // .splice(1)
                .map((x: any, i) => {
                  const title: string =
                    (ROUTE_TITLES as any)["/" + x] ?? "Страница не найдена";

                  return (
                    <div
                      key={i}
                      onClick={() => {
                        navigate(location.pathname.split("/").join("/"));
                      }}
                    >
                      {title}
                    </div>
                  );
                })}
            </Breadcrumbs>
            <Grid sx={{ mt: "8px" }}>{children}</Grid>
          </div>
        </div>
      </Grid>
      <Grid size={12} sx={{ mt: "16px" }}>
        <AppFooter />
      </Grid>
    </Grid>
  );
};
