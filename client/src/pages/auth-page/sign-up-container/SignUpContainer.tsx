import { Button } from "@mui/material";
import { FC } from "react";
import styles from "./SignUpContainer.module.scss";

export const SignUpContainer: FC = () => {
  return (
    <div className={styles.main}>
      <Button variant="outlined">Как студент</Button>
      <Button variant="outlined">Как учебное заведение</Button>
      <Button variant="outlined">Как СИГМА (бизнес)</Button>
    </div>
  );
};
