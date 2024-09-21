import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";

export const StudentClaimListItem: FC<StudentClaimListItemProps> = ({
  title,
}) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          Прософт системы
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={"Ожидает"} variant="outlined" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Принять
        </Button>
        <Button size="small" variant="outlined" color="primary">
          Отказаться
        </Button>
      </CardActions>
    </Card>
  );
};

export interface StudentClaimListItemProps {
  title: string;
}
