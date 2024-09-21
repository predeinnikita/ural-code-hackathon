import { FC, useCallback } from "react";
import { Button, Input } from "@mui/material";
import { useFormik } from "formik";
import { LoginForm as LoginFormPayload } from "../../../typing/auth";
import styles from "./LoginForm.module.scss";

interface Props {
  onClickSignIn: (payload: LoginFormPayload) => void;
  onClickSignUp: () => void;
}

export const LoginForm: FC<Props> = ({ onClickSignUp, onClickSignIn }) => {
  const { values, handleChange, isValid } = useFormik<LoginFormPayload>({
    initialValues: {
      login: "",
      password: "",
    },
    validate: (values) => {
      return Object.entries(values).reduce(
        (prev, [key, value]) =>
          !!value ? { ...prev } : { ...prev, [key]: true },
        {}
      );
    },
    onSubmit: () => {},
  });

  const handleSubmit = useCallback(() => {
    if (isValid) {
      onClickSignIn(values);
    }
  }, [values]);

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <Input
          placeholder="E-mail"
          name="login"
          value={values.login}
          onChange={handleChange}
          fullWidth
        />
        <Input
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div className={styles.buttons}>
        <Button variant="contained" onClick={handleSubmit}>
          Войти
        </Button>
        <div>или</div>
        <Button onClick={onClickSignUp}>Зарегистрироваться</Button>
      </div>
    </div>
  );
};
