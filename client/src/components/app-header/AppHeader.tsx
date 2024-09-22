import { FC, useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../routing/routes";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./AppHeader.module.scss";
import { Hidder } from "../shared/hidder/Hidder";

export const AppHeader: FC<any> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickProfile = () => {
    navigate(ROUTES.PROFILE_PAGE);

    setAnchorEl(null);
  };
  const exitClickProfile = () => {
    navigate(ROUTES.AUTH_PAGE);

    setAnchorEl(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.navigation}>
          <div className={styles.navigationLogo}>
            <img src={"vodobobr2.png"} loading="lazy" width={28} height={28} />
          </div>
          <Hidder condition={location.pathname != '/auth'}>
            <div
              className={styles.navigationItem}
              onClick={() => navigate(ROUTES.STUDENT_CLAIM_LIST_PAGE)}
            >
              Заявки
            </div>
            <div
            className={styles.navigationItem}
            onClick={() => navigate(ROUTES.ORGANIZATION_CLAIM_LIST_PAGE)}
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
            onClick={() => navigate(ROUTES.STATISTICS_PAGE)}
          >
            Статистика
          </div>
          </Hidder>

          
        </div>
        <div className={styles.rightPart}>
          <Hidder condition={location.pathname != '/auth'}>
           <Button
            size="small"
            variant="outlined"
            sx={{ mr: "16px" }}
            onClick={() => navigate(ROUTES.CREATE_VACANCY_PAGE)}
          >
            Создать вакансию
          </Button>
          <AccountCircleIcon
            onClick={(event: any) => setAnchorEl(event.currentTarget)}
          />
          </Hidder>
         
          
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={!!anchorEl}
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
