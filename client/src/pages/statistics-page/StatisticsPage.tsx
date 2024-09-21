import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { FC, useEffect, useRef } from "react";
import { SpecialitiesCount } from "./specialities-count/SpecialitiesCount";
import { StudentsCount } from "./students-count/StudentsCount";
import { ClaimsCount } from "./claims-count/ClaimsCount";
import Grid from "@mui/material/Grid2";
import { StudentsFilter } from "./statistic-filter/StudentsFilter";
import Typography from "@mui/material/Typography";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

export const StatisticsPage: FC = () => {
  return (
    <Grid container size={12}>
      <Grid size={4} sx={{ pr: "16px" }}>
        <StudentsFilter />
      </Grid>
      <Grid container size={8} spacing={2}>
        <Grid size={12}>
          <Typography variant="h5" fontWeight="medium">
            Количество стажировок
          </Typography>
          <SpecialitiesCount />

          <Typography variant="h5" fontWeight="medium">
            Количество студентов
          </Typography>
          <StudentsCount />

          <Typography variant="h5" fontWeight="medium">
            Заявки
          </Typography>
          <ClaimsCount />
        </Grid>
      </Grid>
    </Grid>
  );
};
