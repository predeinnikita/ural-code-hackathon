import { FC, isValidElement } from "react";
import { useFormik } from "formik";
import { Button, Input } from "@mui/material";
import styles from "./SignUpStudentForm.module.scss";
import { StudentForm } from "../../../typing/auth";

interface Props {
  onClickSignUp: (payload: StudentForm) => void;
}

const INITIAL_STATE: StudentForm = {
  educationalOrganizationFullName: "",
  email: "",
  experienceLevel: "",
  fullName: "",
  grade: "",
  phoneNumber: "",
  speciality: "",
  studentIdNumber: "",
  login: "",
  password: "",
};

export const SignUpStudentsForm: FC<Props> = ({ onClickSignUp }) => {
  const { values, handleChange, submitForm, isValid } = useFormik<StudentForm>({
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
