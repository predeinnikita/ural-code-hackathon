import { FC } from "react";
import styles from "./LoginForm.module.scss";
import { Button, Input } from "@mui/material";
import { useFormik } from "formik";

interface LoginForm {
  login: string;
  password: string;
}

interface Props {
  onClickSignIn: () => void;
  onClickSignUp: () => void;
}

export const LoginForm: FC<Props> = ({ onClickSignUp, onClickSignIn }) => {
  const { values, handleChange } = useFormik<LoginForm>({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: () => {},
  });

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
        <Button variant="contained" onClick={onClickSignIn}>
          Войти
        </Button>
        <div>или</div>
        <Button onClick={onClickSignUp}>Зарегистрироваться</Button>
      </div>
    </div>
  );
};
