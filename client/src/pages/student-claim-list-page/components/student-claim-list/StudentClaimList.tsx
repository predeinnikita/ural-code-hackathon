import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import { VacancyListItem } from "../../../vacancy-list-page/components/vacancy-list-item";
import {
  StudentClaimListItem,
  StudentClaimListItemProps,
} from "../student-claim-list-item";

export const StudentClaimList: FC<any> = () => {
  const [state, setState] = useState<StudentClaimListItemProps[]>([
    {
      title: "Frontend-разработчик",
      company: "Сбербанк",
      status: "Ожидает"
    },
    {
      title: "Инженер ПО",
      company: "ЗАО Рду",
      status: "Приглашение"
    },
    {
      title: "Тестировщик",
      company: "СКБ Контур",
      status: "Отказ"
    },
    {
      title: "SMM-менеджер",
      company: "Яндекс",
      status: "Тестовое"
    },
    {
      title: "Проектный менеджер",
      company: "Тинькофф",
      status: "Ожидает"
    },
  ]);

  return (
    <Stack direction={"column"}>
      {state.map((x: StudentClaimListItemProps, index) => {
        return (
          <Grid
            key={index}
            sx={{ mb: state.length - 1 === index ? "0" : "8px" }}
          >
            <StudentClaimListItem title={x.title} company={x.company} status={x.status} />
          </Grid>
        );
      })}
    </Stack>
  );
};
