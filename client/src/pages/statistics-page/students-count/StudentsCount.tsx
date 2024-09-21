import { ChartData } from "chart.js";
import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { specialities, specialitiesStats } from "./statistics";

export const StudentsCount: FC = () => {

  const data: ChartData<"bar", (number | [number, number] | null)[]> = {
    labels: specialities,
    datasets: [
      {
        data: specialitiesStats,
        backgroundColor: "#D2E6F5",
        barPercentage: 0.6,
      },
    ],
  };

  return (
    <div>
      <Bar
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
