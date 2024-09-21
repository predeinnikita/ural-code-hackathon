import { FC } from "react";

import styles from "./AppHeader.module.scss";

export const AppHeader: FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>Header</div>
      </div>
    </div>
  );
};
