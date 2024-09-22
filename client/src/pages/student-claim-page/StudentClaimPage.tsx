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
import { ROUTES } from "../../components/routing/routes";
import { useNavigate } from "react-router-dom";

export const StudentClaimPage: FC = () => {
  const [tags, setTags] = useState<string[]>(["Frontend", "1 год опыта"]);
  const navigate = useNavigate();

  const [sended, setSended] = useState(false);

  return (
    <Stack direction="column">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa ex maiores id in. Illum libero quia facere nam consectetur? Nostrum doloribus autem delectus! Quidem ut illum accusamus deleniti mollitia!
              </Grid>
            </Stack>
          </CardContent>
          <CardActions onClick={() => setSended(true)}>
            { sended ? 'Приглашение отправлено' : <>
                <Button size="small" variant="contained" color="primary">
                  Отправить приглашение
                </Button>
                <Button size="small" variant="outlined" color="primary">
                  Отказать
                </Button>
                </>
            }

          </CardActions>
        </Card>
      </Grid>
    </Stack>
  );
};
