import { FC } from "react";
import styles from "./SignUpBusinesForm.module.scss";
import { useFormik } from "formik";
import { Button, Input } from "@mui/material";

interface Props {
  onClickSignUp: () => void;
}

interface BusinesForm {
  fullName: string;
  description: string;
  inn: string;
  ogrn: string;
  address: string;
  email: string;
  phoneNumber: string;
}

const INITIAL_STATE: BusinesForm = {
  address: "",
  description: "",
  email: "",
  fullName: "",
  inn: "",
  ogrn: "",
  phoneNumber: "",
};

export const SignUpBusinesForm: FC<Props> = () => {
  const { values, handleChange } = useFormik<BusinesForm>({
    initialValues: INITIAL_STATE,
    onSubmit: () => {},
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
      <Button>Зарегистрироваться</Button>
    </div>
  );
};
