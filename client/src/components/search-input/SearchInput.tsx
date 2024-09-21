import { FC } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./VacancyListFilter.module.scss";

export const SearchInput: FC<any> = () => {
  return (
    <Paper
      component="form"
      sx={{
        // p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        size={"small"}
        sx={{ ml: 1, pt: "5px", flex: 1 }}
        placeholder="Поиск..."
      />
      <IconButton
        size={"small"}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon fontSize={"small"} />
      </IconButton>
    </Paper>
  );
};
