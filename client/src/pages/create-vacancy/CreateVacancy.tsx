import { FC } from "react";
import styles from "./CreateVacancy.module.scss";
import { useFormik } from "formik";
import { Button, Input } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

interface CreateVacancyPayload {
  period: {
    start: string;
    end: string;
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
  return (
    <div className={styles.main}>
      <div className={styles.title}>Создание вакансии</div>
      <div className={styles.fields}>
        {Object.entries(values).map(([key, value]) => {
          if (key === "period") {
            return <></>;
          }

          return <Input key={key} value={value} name="key" />;
        })}
        <LocalizationProvider>
          <DatePicker></DatePicker>
        </LocalizationProvider>
      </div>
      <Button disabled={!isValid} onClick={submitForm}>
        Создать
      </Button>
    </div>
  );
};
