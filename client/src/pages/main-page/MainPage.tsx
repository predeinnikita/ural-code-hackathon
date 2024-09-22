import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../components/routing/routes";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const MainPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ mb: "16px" }} variant="h3">Главная</Typography>
      <Typography variant="h3">Да Это главная!</Typography>
    </Stack>
  );
};
