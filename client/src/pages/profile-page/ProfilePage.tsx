import { Card, CardContent, Button } from "@mui/material";
import { FC } from "react";
import styles from "./ProfilePage.module.scss";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

export const ProfilePage: FC = () => {
  return (
    <div className={styles.card}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            Frontend-developer
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Компания
          </Typography>
          <Typography variant="subtitle1">Ао "Аоаоао"</Typography>
          <Typography variant="h6" fontWeight="bold">
            Зарплатные ожидания
          </Typography>
          <Typography variant="subtitle1">70 000 руб.</Typography>
          <Typography variant="h6" fontWeight="bold">
            Период
          </Typography>
          <Typography variant="subtitle1">
            22 сентября 2024 - 30 сентября 2024
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            График работы
          </Typography>
          <Typography variant="subtitle1">Неполный рабочий день</Typography>
          <Typography variant="h6" fontWeight="bold">
            Описание
          </Typography>
          <Typography variant="subtitle1">
            Специалист, который создает интерфейсы веб-сайтов и приложений.
            Проще говоря, разрабатывает внешний вид интернет-площадок: это
            картинки, выпадающие списки, анимация, карточки товаров и все, с чем
            может взаимодействовать пользователь
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Редактировать</Button>
        </CardActions>
      </Card>
    </div>
  );
};
