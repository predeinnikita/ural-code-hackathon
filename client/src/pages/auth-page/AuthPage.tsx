import { FC, useCallback, useState } from "react";
import styles from "./AuthPage.module.scss";
import { useFormik } from "formik";
import { Button, Input } from "@mui/material";
import { LoginForm } from "./login-form";
import { Hidder } from "../../components/shared/hidder/Hidder";
import { SignUpContainer } from "./sign-up-container/SignUpContainer";

const TITLES: { [key in LoginSteps]?: string } = {
  login: "Войти",
  sign_up: "Зарегистрироваться",
};

enum LoginSteps {
  LOGIN = "login",
  SIGN_UP = "sign_up",
  SIGN_UP_STUDENT = "sign_up_student",
  SIGN_UP_UNIVERSITY = "sign_up_university",
  SIGN_UP_BUSINES = "sign_up_busines",
}

export const AuthPage: FC = () => {
  const [loginState, setLoginState] = useState<LoginSteps>(LoginSteps.LOGIN);

  const onClickSignUpButton = useCallback(() => {
    setLoginState(LoginSteps.SIGN_UP);
  }, []);

  const handleLogin = useCallback(() => {
    // TODO login request
  }, []);

  return (
    <div className={styles.main}>
      <div>{TITLES[loginState]}</div>
      <Hidder condition={loginState === LoginSteps.LOGIN}>
        <LoginForm
          onClickSignIn={handleLogin}
          onClickSignUp={onClickSignUpButton}
        />
      </Hidder>
      <Hidder condition={loginState === LoginSteps.SIGN_UP}>
        <SignUpContainer />
      </Hidder>
    </div>
  );
};
