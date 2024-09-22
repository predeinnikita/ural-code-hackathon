import { FC, useCallback } from "react";
import styles from "./SignUpBusinesForm.module.scss";
import { useFormik } from "formik";
import { Button, Input } from "@mui/material";
import { BusinesForm } from "../../../typing/auth";

interface Props {
  onClickSignUp: (payload: BusinesForm) => void;
}

const INITIAL_STATE: BusinesForm = {
  address: "",
  description: "",
  email: "",
  fullName: "",
  inn: "",
  ogrn: "",
  phoneNumber: "",
  login: "",
  password: "",
};

export const SignUpBusinesForm: FC<Props> = ({ onClickSignUp }) => {
  const { values, handleChange, isValid, submitForm } = useFormik<BusinesForm>({
    initialValues: INITIAL_STATE,
    validate: (values) => {
      return Object.entries(values).reduce(
        (prev, [key, value]) =>
          !!value ? { ...prev } : { ...prev, [key]: true },
        {}
      );
    },
    onSubmit: (values) => {
      if (isValid) {
        onClickSignUp(values);
      }
    },
  });

  return (
    <div className={styles.main}>
      <div className={styles.fields}>
        {Object.entries(values).map(([key, value]) => (
          <Input
            key={key}
            placeholder={key}
            name={key}
            value={value}
            onChange={handleChange}
          />
        ))}
      </div>
      <Button onClick={submitForm}>Зарегистрироваться</Button>
    </div>
  );
};
