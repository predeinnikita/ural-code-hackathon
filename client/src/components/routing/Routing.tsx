import { FC, Suspense } from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "./routes";
import { AppContainer } from "../app-container";
import { AuthPage } from "../../pages/auth-page/AuthPage";
import { NotFoundPage } from "../../pages/not-found-page/NotFoundPage";
import { VacancyPage } from "../../pages/vacancy-page/VacancyPage";
import { VacancyListPage } from "../../pages/vacancy-list-page/VacancyListPage";
import { StudentClaimListPage } from "../../pages/student-claim-list-page/StudentClaimListPage";
import { OrganizationClaimListPage } from "../../pages/organization-claim-list-page/OrganizationClaimListPage";
import { StudentClaimPage } from "../../pages/student-claim-page/StudentClaimPage";

export const Routing: FC = () => {
  return (
    <Suspense fallback={<>Пошел нахуй...</>}>
      <AppContainer>
        <Routes>
          <Route path={ROUTES.AUTHORIZED_PAGE} element={<AuthPage />} />
          <Route path={ROUTES.VACANCY_PAGE} element={<VacancyPage />} />
          <Route
            path={ROUTES.VACANCY_LIST_PAGE}
            element={<VacancyListPage />}
          />
          <Route
            path={ROUTES.STUDENT_CLAIM_LIST_PAGE}
            element={<StudentClaimListPage />}
          />
          <Route
            path={ROUTES.ORGANIZATION_CLAIM_LIST_PAGE}
            element={<OrganizationClaimListPage />}
          />
          <Route
            path={ROUTES.STUDENT_CLAIM_PAGE}
            element={<StudentClaimPage />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </Suspense>
  );
};
