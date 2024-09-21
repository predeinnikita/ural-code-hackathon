import { CircularProgress } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface Props {
  condition?: boolean;
  loading?: boolean;
}

export const Hidder: FC<PropsWithChildren<Props>> = ({
  condition = true,
  loading,
  children,
}) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (condition) {
    return <>{children}</>;
  }

  return <></>;
};
