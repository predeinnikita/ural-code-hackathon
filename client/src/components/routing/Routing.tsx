import { FC, Suspense } from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "./routes";
import { AppContainer } from "../app-container";
import { AuthPage } from "../../pages/auth-page/AuthPage";
import { NotFoundPage } from "../../pages/not-found-page/NotFoundPage";
import { VacancyPage } from "../../pages/vacancy-page/VacancyPage";
import { ClaimsPage } from "../../pages/claims-page/ClaimsPage";
import { VacancyListPage } from "../../pages/vacancy-list-page/VacancyListPage";

export const Routing: FC = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <AppContainer>
        <Routes>
          <Route path={ROUTES.AUTHORIZED_PAGE} element={<AuthPage />} />
                    <Route path={ROUTES.VACANCY_PAGE} element={<VacancyPage />} />
          <Route path={ROUTES.CLAIMS_PAGE} element={<ClaimsPage />} />
            <Route
            path={ROUTES.VACANCY_LIST_PAGE}
            element={<VacancyListPage />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </Suspense>
  );
};
