import { FC } from "react";
import styles from "./CreateVacancy.module.scss";
import { useFormik } from "formik";
import { Button, Input, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface CreateVacancyPayload {
  period: {
    start: string | null;
    end: string | null;
  };
  paymemt: string;
  workingHours: string;
  description: string;
  grade: string;
}

export const CreateVacancy: FC = () => {
  const { values, handleChange, isValid, submitForm } =
    useFormik<CreateVacancyPayload>({
      initialValues: {
        description: "",
        grade: "",
        paymemt: "",
        period: {
          end: "",
          start: "",
        },
        workingHours: "",
      } as const,
      onSubmit: () => {},
    });

  console.log(values);

  return (
    <div className={styles.main}>
      <div className={styles.title}>Создание вакансии</div>
      <div className={styles.fields}>
        {Object.entries(values).map(([key, value], index) => {
          if (key === "period") {
            return null;
          }

          return (
            <TextField
              placeholder={key}
              key={key + index}
              value={value}
              name={key}
              variant="outlined"
              onChange={handleChange}
            />
          );
        })}
        <div className={styles.date}>
          <DatePicker
            name="period.start"
            onChange={(e) => (
              console.log(e),
              handleChange({
                target: { name: "period.start", values: e?.toISOString() },
              })
            )}
          />
          <DatePicker
            name="period.end"
            onChange={(e) =>
              handleChange({
                target: { name: "period.end", values: e?.toISOString() },
              })
            }
          />
        </div>
      </div>
      <Button disabled={!isValid} onClick={submitForm} variant="contained">
        Создать
      </Button>
    </div>
  );
};
