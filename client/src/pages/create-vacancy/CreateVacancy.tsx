import { FC } from "react";
import styles from "./CreateVacancy.module.scss";
import { useFormik } from "formik";
import { Button, Input, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { CreateVacancyPayload } from "../../typing/vacancy";
import { useAppDispatch } from "../../redux/store";
import { createVacancyAsync } from "../../redux/slices/vacancy.slice";
import dayjs, { Dayjs } from "dayjs";

export const CreateVacancy: FC = () => {
  const dispatch = useAppDispatch();

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
      },
      validate: (values) => {
        return Object.entries(values).reduce(
          (prev, [key, value]) => {
            if (typeof value !== "object") {
              return !!value ? { ...prev } : { ...prev, [key]: true };
            }

            const { start, end } = value;

            // if (!start) {
            //   return {
            //     ...prev,
            //     //@ts-ignore
            //     [key]: { ...(prev?.[key] || {}), start: true },
            //   };
            // }
            // if (!end) {
            //   return {
            //     ...prev,
            //     //@ts-ignore
            //     [key]: { ...(prev?.[key] || {}), end: true },
            //   };
            // }

            return { ...prev };
          },

          {}
        );
      },
      onSubmit: (values) => {
        if (isValid) {
          dispatch(createVacancyAsync(values));
        }
      },
    });

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
            value={dayjs(values.period.start)}
            name="start"
            onChange={(e) =>
              handleChange({
                target: { name: "start", values: e?.toISOString() },
              })
            }
          />
          <DatePicker
            value={dayjs(values.period.end)}
            name="end"
            onChange={(e) =>
              handleChange({
                target: { name: "end", values: e?.toISOString() },
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
