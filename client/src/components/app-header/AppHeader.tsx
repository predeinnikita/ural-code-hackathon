import { FC } from "react";

import styles from "./AppHeader.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routing/routes";
import { Button } from "@mui/material";

export const AppHeader: FC<any> = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.navigation}>
          <div
            className={styles.navigationItem}
            onClick={() => navigate(ROUTES.STUDENT_CLAIM_LIST_PAGE)}
          >
            Студ Заявки
          </div>
          <div
            className={styles.navigationItem}
            onClick={() => navigate(ROUTES.ORGANIZATION_CLAIM_LIST_PAGE)}
          >
            Орг Заявки
          </div>
          <div
            className={styles.navigationItem}
            onClick={() => navigate(ROUTES.VACANCY_LIST_PAGE)}
          >
            Вакансии
          </div>
          <div
            className={styles.navigationItem}
            onClick={() => navigate(ROUTES.STATISTICS)}
          >
            Статистика
          </div>
        </div>
        <div className={styles.rightPart}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate(ROUTES.CREATE_VACANCY)}
          >
            Создать вакансию
          </Button>
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};
