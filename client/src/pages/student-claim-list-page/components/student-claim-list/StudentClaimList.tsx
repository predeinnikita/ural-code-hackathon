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
      title: "Прософт системы 1",
    },
    {
      title: "Прософт системы 2",
    },
    {
      title: "Прософт системы 3",
    },
    {
      title: "Прософт системы 4",
    },
    {
      title: "Прософт системы 5",
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
            <StudentClaimListItem title={x.title} />
          </Grid>
        );
      })}
    </Stack>
  );
};
