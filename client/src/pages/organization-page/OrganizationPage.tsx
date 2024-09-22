import { Card, CardContent, Button, Rating } from "@mui/material";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

export const OrganizationPage: FC = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img src={"vodobobr.png"} loading="lazy" width={200} height={200} />
          <Typography variant="h4" fontWeight="bold">
            Ао "Аоаоао"
          </Typography>
          <div>
            <Rating
              name="simple-controlled"
              value={3.5}
            />
          <Button variant="text">Оставить отзыв</Button>
          <Button variant="text">Посмотреть отзывы</Button>
          </div>
          <Typography variant="h5" fontWeight="bold">
            Кто мы?
          </Typography>
          <Typography variant="h6" sx={{ mb: "16px", mt: "8px" }}>
            Ведущая площадка электронной коммерции и одна из крупнейших
            российских интернет компаний*. Мы начали строить бизнес в 1998 году
            — когда рунету было четыре года.
          </Typography>
          <Typography variant="subtitle1">
            Успешный e-commerce — это давно не сайт с картинками, а
            технологическая компания. Чтобы предприниматели по всей стране могли
            развивать свой бизнес, а миллионы пользователей делать сотни тысяч
            заказов в день и получать их вовремя, мы стремимся использовать
            технологии, логистику и инновации.
          </Typography>
          <Typography variant="subtitle1">
            В собственной технологической лаборатории Ozon Tech уже больше 4000
            инженеров.
          </Typography>
          <Typography variant="subtitle1">
            У нас 17 фулфилмент-фабрик, сортировочные центры и пункты выдачи
            заказов по всей стране.
          </Typography>
          <Typography variant="subtitle1">
            Ozon также активно развивает систему сервисов, дополнительных своему
            основному бизнесу, — в том числе fintech-продукты и сервис быстрой
            доставки Ozon fresh.
          </Typography>
          <Typography variant="subtitle1">
            Мы верим, что можем изменить подход к совершению покупок — сделать
            жизнь миллионов людей проще и удобнее, освобождая время для себя и
            своих близких, и стремимся делать лучший в России e-commerce.
            Приходи делать его вместе с нами!
          </Typography>

        </CardContent>
      </Card>
    </div>
  );
};
