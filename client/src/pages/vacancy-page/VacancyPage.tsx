import { Card, CardContent, Button, Link } from "@mui/material";
import { FC, useState } from "react";
import styles from "./VacancyPage.module.scss";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../components/routing/routes";

export const VacancyPage: FC = () => {
  const navigate = useNavigate();

  const [sended, setSended] = useState<boolean>(false);

  return (
    <div className={styles.card}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            Frontend-разработчик
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Компания
          </Typography>
          <Typography variant="subtitle1">
            <Link onClick={() => navigate(ROUTES.ORGANIZATION_PAGE)}>
              Ао "Аоаоао"
            </Link>
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Зарплата
          </Typography>
          <Typography variant="subtitle1">50 000 руб.</Typography>
          <Typography variant="h6" fontWeight="bold">
            Период
          </Typography>
          <Typography variant="subtitle1">
            1 сентября 2024 - 30 сентября 2024
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            График работы
          </Typography>
          <Typography variant="subtitle1">Неполный рабочий день</Typography>
          <Typography variant="h6" fontWeight="bold">
            Описание
          </Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            omnis dicta, perspiciatis commodi, voluptatem quos, placeat itaque
            tempora quae alias in ipsa? Nam inventore ratione ut dolorem
            debitis, tenetur iste.
          </Typography>
        </CardContent>
        <CardActions>
          {
            sended ? 'Заявка отправлена' : <Button variant="contained" onClick={() => {
            setSended(true);
          }}>Подать заявку</Button>
          }

        </CardActions>
      </Card>
    </div>
  );
};
