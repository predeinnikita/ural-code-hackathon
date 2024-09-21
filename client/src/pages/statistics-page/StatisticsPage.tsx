import { ArcElement, BarElement, CategoryScale, Chart, ChartData, Legend, LinearScale, Tooltip } from "chart.js";
import { FC, useEffect, useRef } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router";
import { specialities, specialitiesStats } from "./specialities-count/statistics";
import { SpecialitiesCount } from "./specialities-count/SpecialitiesCount";
import { StudentsCount } from "./students-count/StudentsCount";
import styles from "./StatisticsPage.module.scss";
import { ClaimsCount } from "./claims-count/ClaimsCount";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement
);

export const StatisticsPage: FC = () => {

  return <div className={styles.stats}>
          <h2>Количество стажировок</h2>
          <SpecialitiesCount />

          <h2>Количество студентов</h2>
          <StudentsCount />

          <h2>Заявки</h2>
          <ClaimsCount />
        </div>;
  // <Grid container size={12}>
  // <Grid size={2}>

  // </Grid>
  // <Grid container size={10} spacing={2}>
    {/* <Grid size={12}>

    </Grid>
    <Grid size={12}> */}
      {/* <Stack direction={"column"}> */}
        <div className={styles.stats}>
          <h2>Количество стажировок</h2>
          <SpecialitiesCount />

          <h2>Количество студентов</h2>
          <StudentsCount />

          <h2>Заявки</h2>
          <ClaimsCount />
        </div>
//       </Stack>
//     {/* </Grid> */}
//   </Grid>
// </Grid> 
};
