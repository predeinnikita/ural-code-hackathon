import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import { VacancyListItem, VacancyListItemProps } from "../vacancy-list-item";
import styles from "./VacancyListItem.module.scss";

export const VacancyList: FC<any> = () => {
  const [state, setState] = useState<VacancyListItemProps[]>([
    { title: "Хуй 1", organization: "Хуй 1", tags: [] },
    { title: "Хуй 2", organization: "Хуй 2", tags: [] },
    { title: "Хуй 3", organization: "Хуй 3", tags: [] },
    { title: "Хуй 4", organization: "Хуй 4", tags: [] },
    { title: "Хуй 5", organization: "Хуй 5", tags: [] },
  ]);

  return (
    <Stack direction={"column"}>
      {state.map((x: VacancyListItemProps) => {
        return (
          <VacancyListItem
            title={x.title}
            organization={x.organization}
            tags={x.tags}
          />
        );
      })}
    </Stack>
  );
};
