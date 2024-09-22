import { FC, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import { Hidder } from "../../../../components/shared/hidder/Hidder";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../components/routing/routes";

export const StudentClaimListItem: FC<StudentClaimListItemProps> = ({
  title,
  company,
  status
}) => {
  const navigate = useNavigate();
  const [sended, setSended] = useState<boolean>(false);

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
          { sended ? 'Вы приняты!' : <Chip label={status} variant="outlined" />}
        </Stack>
      </CardContent>
      <CardActions>
        {
          sended ? '' :       <Hidder condition={status === 'Приглашение'}>
        <Button size="small" variant="contained" color="primary" onClick={() => setSended(true)}>
          Принять
        </Button>
        <Button size="small" variant="outlined" color="primary" onClick={() => navigate(ROUTES.VACANCY_PAGE)}>
          Отказать
        </Button>
      </Hidder>
        }

      </CardActions>
    </Card>
  );
};

export interface StudentClaimListItemProps {
  title: string;
  company: string;
  status: 'Ожидает' | 'Приглашение' | 'Отказ' | 'Тестовое';
}
