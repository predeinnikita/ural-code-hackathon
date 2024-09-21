import { Button, IconButton, InputBase, Paper, Chip } from "@mui/material";
import { FC } from "react";
import styles from "./StudentClaimsPage.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import { ROUTES } from "../../components/routing/routes";

export const StudentClaimsPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.filter}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <div className={styles.list}>
        <div className={styles.claimCard}>
          <h3 className={styles.name}>Прософт системы</h3>
          <Chip label={"Ожидает"} variant="outlined" />
          <div className={styles.actions}>
            <Button variant="contained">Принять</Button>
            <Button variant="outlined">Отказаться</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
