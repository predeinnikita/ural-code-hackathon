import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import { Hidder } from "../../../../components/shared/hidder/Hidder";

export const StudentClaimListItem: FC<StudentClaimListItemProps> = ({
  title,
  company,
  status
}) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          { company }
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={status} variant="outlined" />
        </Stack>
      </CardContent>
      <CardActions>
      <Hidder condition={status === 'Приглашение'}>
        <Button size="small" variant="contained" color="primary">
          Принять
        </Button>
        <Button size="small" variant="outlined" color="primary">
          Отказаться
        </Button>
      </Hidder>
      </CardActions>
    </Card>
  );
};

export interface StudentClaimListItemProps {
  title: string;
  company: string;
  status: 'Ожидает' | 'Приглашение' | 'Отказ' | 'Тестовое';
}
