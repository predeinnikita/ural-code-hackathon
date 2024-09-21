import { FC, useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routing/routes";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./AppHeader.module.scss";

export const AppHeader: FC<any> = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickProfile = () => {
    navigate(ROUTES.PROFILE);

    setAnchorEl(null);
  };
  const exitClickProfile = () => {
    navigate(ROUTES.MAIN_PAGE);

    setAnchorEl(null);
  };

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
            sx={{ mr: "16px" }}
            onClick={() => navigate(ROUTES.CREATE_VACANCY)}
          >
            Создать вакансию
          </Button>
          <AccountCircleIcon
            onClick={(event: any) => setAnchorEl(event.currentTarget)}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={(event: any) => setAnchorEl(event)}
          >
            <MenuItem onClick={() => handleClickProfile()}>Профиль</MenuItem>
            <MenuItem onClick={() => exitClickProfile()}>Выход</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};
