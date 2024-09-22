import { Card, CardContent, Button, Link, Stack, Chip, styled } from "@mui/material";
import { FC, useState } from "react";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../components/routing/routes";
import Grid from "@mui/material/Grid2";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styles from "./WorksPage.module.scss";
import HorizontalLinearStepper from "../../components/stepper/Stepper";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const WorksPage: FC = () => {
  const navigate = useNavigate();

  const isOrganization = true;

  const steps = [
    'Оформление документов',
    'Прохождение практики',
    'Взаимная оценка'
  ]

  return (
    <Stack direction="column">
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "100%", maxWidth: "640px", p: "16px" }}>
          <CardContent>
            <Stack direction="column">
              <Typography variant="h5">Frontend-разработчик, АО Аоаоао</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: "8px" }}>
                <HorizontalLinearStepper steps={steps}/>
              </Stack>
              <Typography variant="h6" fontWeight="bold">
                Период
              </Typography>
              <Typography variant="subtitle1">
                1 сентября 2024 - 30 сентября 2024
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                График работы
              </Typography>
              <Typography variant="subtitle1">Неполный рабочий день</Typography>
              <Typography variant="h6" fontWeight="bold">
                Описание
              </Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                omnis dicta, perspiciatis commodi, voluptatem quos, placeat itaque
                tempora quae alias in ipsa? Nam inventore ratione ut dolorem
                debitis, tenetur iste.
              </Typography>
              <div className={styles.file}>
              { isOrganization ? <Button variant="contained">Документы оформлены</Button> : ''}
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload files
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                  />
                </Button>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Stack>
  );
};
