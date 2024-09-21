import { FC } from "react";

import styles from "./AppHeader.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routing/routes";

export const AppHeader: FC<any> = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.navigation}>
          <div
            className={styles.navigationItem}
            onClick={() => navigate(ROUTES.CLAIMS_PAGE)}
          >
            Заявки
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
        <div className={styles.profile}>
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};
