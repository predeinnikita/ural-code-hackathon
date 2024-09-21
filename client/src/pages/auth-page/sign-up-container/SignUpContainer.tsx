import { Button } from "@mui/material";
import { FC } from "react";
import styles from "./SignUpContainer.module.scss";

interface Props {
  onClickStudent: () => void;
  onClickEducateion: () => void;
  onClickSigma: () => void;
}

export const SignUpContainer: FC<Props> = ({
  onClickEducateion,
  onClickSigma,
  onClickStudent,
}) => {
  return (
    <div className={styles.main}>
      <Button variant="outlined" onClick={onClickStudent}>
        Как студент
      </Button>
      <Button variant="outlined" onClick={onClickEducateion}>
        Как учебное заведение
      </Button>
      <Button variant="outlined" onClick={onClickSigma}>
        Как СИГМА (бизнес)
      </Button>
    </div>
  );
};
