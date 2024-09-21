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
      },
    ],
  };

  return (
    <div className={styles.stats}>
      <Doughnut
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: "#AAAAAA",
                titleColor: "#FFFFFF",
                yAlign: "bottom" as const,
                titleAlign: "center",
                padding: { x: 20, y: 10 },
                callbacks: {
                  title: (data) => {
                    return (data[0].raw as number).toFixed(0);
                  },
                  label: () => "",
                },
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
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
                  display: false,
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
