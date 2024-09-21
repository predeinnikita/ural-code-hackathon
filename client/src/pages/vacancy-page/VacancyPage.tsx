import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { FC } from "react";
import styles from "./VacancyPage.module.scss";

export const VacancyPage: FC = () => {
  return (
    <div className={styles.card}>
      <div>
        <Button variant="outlined">Назад</Button>
      </div>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <h1>Frontend-developer</h1>
          <h2>Компания</h2>
          <p>Ао "Аоаоао"</p>
          <h2>Зарплата</h2>
          <p>50 000 руб.</p>
          <h2>Период</h2>
          <p>13 марта 2024 - 15 декабря</p>
          <h2>График работы</h2>
          <p>Неполный рабочий день</p>
          <h2>Описание</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            omnis dicta, perspiciatis commodi, voluptatem quos, placeat itaque
            tempora quae alias in ipsa? Nam inventore ratione ut dolorem
            debitis, tenetur iste.
          </p>
          <div className={styles.actions}>
            <Button variant="contained">Подать заявку</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
