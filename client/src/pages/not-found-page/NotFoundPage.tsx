import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../components/routing/routes";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>404</h3>
      <button onClick={() => navigate(ROUTES.MAIN_PAGE)}>На главную</button>
    </div>
  );
};
