import { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import {
  OrganizationClaimListItem,
  OrganizationClaimListItemProps,
} from "../organization-claim-list-item";

export const OrganizationClaimList: FC<any> = () => {
  const [state, setState] = useState<OrganizationClaimListItemProps[]>([
    {
      title: "Никита",
      tags: ["1 курс", "Без опыт"],
      vuz: "УрФУ",
    },
    {
      title: "Артем",
      tags: ["1 курс", "Без опыт"],
      vuz: "УрФУ",
    },
    {
      title: "Кирилл",
      tags: ["1 курс", "Без опыт"],
      vuz: "УрФУ",
    },
    {
      title: "Cаня",
      tags: ["1 курс", "Без опыт"],
      vuz: "УрФУ",
    },
    {
      title: "Дима",
      tags: ["1 курс", "Без опыт"],
      vuz: "УрФУ",
    },
  ]);

  return (
    <Stack direction={"column"}>
      {state.map((x: OrganizationClaimListItemProps, index) => {
        return (
          <Grid
            key={index}
            sx={{ mb: state.length - 1 === index ? "0" : "8px" }}
          >
            <OrganizationClaimListItem {...x} />
          </Grid>
        );
      })}
    </Stack>
  );
};
