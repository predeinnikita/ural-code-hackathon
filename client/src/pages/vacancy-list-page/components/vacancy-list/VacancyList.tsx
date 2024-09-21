import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import { VacancyListItem, VacancyListItemProps } from "../vacancy-list-item";
import styles from "./VacancyListItem.module.scss";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const VacancyList: FC<any> = () => {
  const [state, setState] = useState<VacancyListItemProps[]>([
    {
      title: "vacancy 1",
      organization: "vacancy 1",
      tags: ["1-2 курс", "Без опыта"],
    },
    {
      title: "vacancy 2",
      organization: "vacancy 2",
      tags: ["1-2 курс", "Без опыта"],
    },
    {
      title: "vacancy 3",
      organization: "vacancy 3",
      tags: ["1-2 курс", "Без опыта"],
    },
    {
      title: "vacancy 4",
      organization: "vacancy 4",
      tags: ["1-2 курс", "Без опыта"],
    },
    {
      title: "vacancy 5",
      organization: "vacancy 5",
      tags: ["1-2 курс", "Без опыта"],
    },
  ]);

  return (
    <Stack direction={"column"}>
      {state.map((x: VacancyListItemProps, index) => {
        return (
          <Grid
            key={index}
            sx={{ mb: state.length - 1 === index ? "0" : "8px" }}
          >
            <VacancyListItem
              title={x.title}
              organization={x.organization}
              tags={x.tags}
            />
          </Grid>
        );
      })}
    </Stack>
  );
};
