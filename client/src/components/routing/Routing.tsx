import { FC, Suspense } from "react";
import { Route, Routes, Outlet } from "react-router";
import { ROUTES } from "./routes";
import { AppContainer } from "../app-container";
import { AuthPage } from "../../pages/auth-page/AuthPage";
import { NotFoundPage } from "../../pages/not-found-page/NotFoundPage";
import { VacancyPage } from "../../pages/vacancy-page/VacancyPage";

export const Routing: FC = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <AppContainer>
        <Routes>
          <Route path={ROUTES.AUTHORIZED_PAGE} element={<AuthPage />} />
          <Route path={ROUTES.VACANCY_PAGE} element={<VacancyPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </Suspense>
  );
};
