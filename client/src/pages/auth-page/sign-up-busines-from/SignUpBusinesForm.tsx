import { FC } from "react";
import styles from "./SignUpBusinesForm.module.scss";
import { useFormik } from "formik";

interface Props {
  onClickSignIn: () => void;
  onClickSignUp: () => void;
}

interface BusinesForm {
  login: string;
  password: string;
}

export const SignUpBusinesForm: FC<Props> = () => {
  const { values, handleChange } = useFormik<BusinesForm>({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return <div className={styles.main}></div>;
};
