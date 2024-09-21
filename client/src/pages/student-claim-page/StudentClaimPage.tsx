import { FC, useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "./StudentClaimPage.module.scss";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { StudentClaimListItemProps } from "../student-claim-list-page/components/student-claim-list-item";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { CustomTextarea } from "../../components/custom-textarea/CustomTextarea";

export const StudentClaimPage: FC = () => {
  const [tags, setTags] = useState<any[]>(["Тэг1", "Тэг2"]);

  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", maxWidth: "640px", p: "16px" }}>
        <CardContent>
          <Stack direction="column">
            <Typography variant="h5">Никита</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: "8px" }}>
              {tags.map((x: string, i: number) => {
                return (
                  <Chip
                    color="primary"
                    variant="outlined"
                    key={i}
                    label={x}
                    size="small"
                  />
                );
              })}
            </Stack>
            <Grid sx={{ mt: "16px" }}>
              <CustomTextarea minRows={3} placeholder={"Описание..."} />
            </Grid>
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary">
            Принять
          </Button>
          <Button size="small" variant="outlined" color="primary">
            Отказаться
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
