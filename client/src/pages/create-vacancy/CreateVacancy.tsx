import { FC } from "react";
import styles from "./CreateVacancy.module.scss";
import { useFormik } from "formik";
import { Autocomplete, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { CreateVacancyPayload } from "../../typing/vacancy";
import { useAppDispatch } from "../../redux/store";
import { createVacancyAsync } from "../../redux/slices/vacancy.slice";
import dayjs from "dayjs";

const options = [
  {
    title: "front",
    value: "front",
  },
  {
    title: "back",
    value: "back",
  },
  {
    title: "pevops",
    value: "pevops",
  },
];

interface Form extends Omit<CreateVacancyPayload, "period"> {
  end: string;
  start: string;
}

export const CreateVacancy: FC = () => {
  const dispatch = useAppDispatch();

  const { values, handleChange, isValid, submitForm, setValues } =
    useFormik<Form>({
      initialValues: {
        grade: [],
        name: "",
        description: "",
        paymemt: "",
        end: "",
        start: "",
        workingHours: "",
      },
      validate: (values) => {
        return Object.entries(values).reduce((prev, [key, value]) => {
          return !!value ? { ...prev } : { ...prev, [key]: true };
        }, {});
      },
      onSubmit: (values) => {
        if (isValid) {
          const { end, start, ...rest } = values;
          dispatch(createVacancyAsync({ ...rest, period: { start, end } }));
        }
      },
    });

  console.log(values);

  return (
    <div className={styles.main}>
      <div className={styles.title}>Создание вакансии</div>
      <div className={styles.fields}>
        <div className={styles.item}>
          <div>Название</div>
          <TextField
            fullWidth
            value={values.name}
            name="name"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div className={styles.item}>
          <div>Описание</div>
          <TextField
            fullWidth
            value={values.description}
            name="description"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div className={styles.item}>
          <div>Специальность</div>
          <Autocomplete
            multiple
            id="tags-standard"
            value={values.grade || []}
            options={options.map(({ title }) => title)}
            onChange={(_, v) => {
              setValues({ ...values, grade: v });
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
          <div className={styles.item}>
            <div>Зарплата</div>
            <TextField
              fullWidth
              value={values.paymemt}
              name="paymemt"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className={styles.item}>
            <div>График работы</div>
            <TextField
              fullWidth
              value={values.workingHours}
              name="workingHours"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.date}>
        <DatePicker
          value={dayjs(values.start)}
          name="start"
          onChange={(e) =>
            handleChange({
              target: { name: "start", values: e?.toISOString() },
            })
          }
        />
        <DatePicker
          value={dayjs(values.end)}
          name="end"
          onChange={(e) =>
            handleChange({
              target: { name: "end", values: e?.toISOString() },
            })
          }
        />
      </div>
      <Button disabled={!isValid} onClick={submitForm} variant="contained">
        Создать
      </Button>
    </div>
  );
};
