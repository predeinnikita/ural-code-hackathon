import { FC } from "react";

import styles from "./AppFooter.module.scss";

export const AppFooter: FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>AO "Aoaoao"</div>
      </div>
    </div>
  );
};
