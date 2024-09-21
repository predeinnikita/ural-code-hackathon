import { BarElement, CategoryScale, Chart, ChartData, LinearScale } from "chart.js";
import { FC, useEffect, useRef } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { specialities, specialitiesStats } from "./statistics";
import styles from './ClaimsCount.module.scss';

export const ClaimsCount: FC = () => {

  const data: ChartData<"doughnut", (number | [number, number] | null)[]> = {
    labels: specialities,
    datasets: [
      {
        data: specialitiesStats,
        backgroundColor: "#D2E6F5",
        // backgroundColor: [
        //   'rgb(255, 99, 132)',
        //   'rgb(54, 162, 235)',
        //   'rgb(255, 205, 86)'
        // ],  
      },
    ],
  };

  return (
    <div className={styles.stats}>
      <Doughnut
          options={{
            responsive: true,
            plugins: {
              // legend: {
              //   display: true,
              // },
              // tooltip: {
              //   backgroundColor: "#AAAAAA",
              //   titleColor: "#FFFFFF",
              //   yAlign: "bottom" as const,
              //   titleAlign: "center",
              //   padding: { x: 20, y: 10 },
              //   callbacks: {
              //     title: (data) => {
              //       return 'aaaa';
              //     },
              //     label: () => "aaaa",
              //   },
              // },
            },
            scales: {
              x: {
                grid: {
                  display: true,
                },
                ticks: {
                  color: "#AAAAAA",
                  autoSkipPadding: 60,
                  font: {
                    size: 20,
                  },
                  padding: 20,
                },
              },
              y: {
                grid: {
                  display: true,
                },
                ticks: {
                  color: "#000000",
                  autoSkipPadding: 60,
                  font: {
                    size: 20,
                  },
                  padding: 20,
                },
              },
            },
          }}
          data={data}
        />
    </div>
  );
};
