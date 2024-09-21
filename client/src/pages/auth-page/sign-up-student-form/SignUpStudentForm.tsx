import { FC } from "react";
import { useFormik } from "formik";
import { Button, Input } from "@mui/material";
import styles from "./SignUpStudentForm.module.scss";

interface Props {
  onClickSignUp: () => void;
}

interface StudentForm {
  fullName: string;
  studentIdNumber: string;
  educationalOrganizationFullName: string;
  speciality: string;
  grade: string;
  experienceLevel: string;
  email: string;
  phoneNumber: string;
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
};

export const SignUpStudentsForm: FC<Props> = () => {
  const { values, handleChange } = useFormik<StudentForm>({
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
