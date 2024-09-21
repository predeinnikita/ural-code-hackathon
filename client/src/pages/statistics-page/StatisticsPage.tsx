import { ArcElement, BarElement, CategoryScale, Chart, ChartData, Legend, LinearScale, Tooltip } from "chart.js";
import { FC, useEffect, useRef } from "react";
import { SpecialitiesCount } from "./specialities-count/SpecialitiesCount";
import { StudentsCount } from "./students-count/StudentsCount";
import { ClaimsCount } from "./claims-count/ClaimsCount";
import Grid from "@mui/material/Grid2";
import { StudentsFilter } from "./statistic-filter/StudentsFilter";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement
);

export const StatisticsPage: FC = () => {
  return <Grid container size={12}>
      <Grid size={4} sx={{ pr: "16px" }}>
        <StudentsFilter />
      </Grid>
      <Grid container size={8} spacing={2}>
        <Grid size={12}>
          <h2>Количество стажировок</h2>
          <SpecialitiesCount />

          <h2>Количество студентов</h2>
          <StudentsCount />

          <h2>Заявки</h2>
          <ClaimsCount />
        </Grid>
      </Grid>
    </Grid>
};
