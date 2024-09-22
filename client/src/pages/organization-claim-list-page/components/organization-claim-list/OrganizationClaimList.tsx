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
      tags: ["1 курс", "1 год опыта"],
      vuz: "УрФУ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam magnam quas, possimus recusandae vitae saepe molestias omnis assumenda ducimus exercitationem dolores distinctio natus reprehenderit neque incidunt quam itaque quo?"
    },
    {
      title: "Артем",
      tags: ["1 курс", "Без опыта"],
      vuz: "УрФУ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam magnam quas, possimus recusandae vitae saepe molestias omnis assumenda ducimus exercitationem dolores distinctio natus reprehenderit neque incidunt quam itaque quo?"
    },
    {
      title: "Кирилл",
      tags: ["1 курс", "Без опыта"],
      vuz: "УрФУ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam magnam quas, possimus recusandae vitae saepe molestias omnis assumenda ducimus exercitationem dolores distinctio natus reprehenderit neque incidunt quam itaque quo?"
    },
    {
      title: "Cаня",
      tags: ["1 курс", "Без опыта"],
      vuz: "УрФУ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam magnam quas, possimus recusandae vitae saepe molestias omnis assumenda ducimus exercitationem dolores distinctio natus reprehenderit neque incidunt quam itaque quo?"
    },
    {
      title: "Дима",
      tags: ["1 курс", "Без опыта"],
      vuz: "УрФУ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam magnam quas, possimus recusandae vitae saepe molestias omnis assumenda ducimus exercitationem dolores distinctio natus reprehenderit neque incidunt quam itaque quo?"
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
