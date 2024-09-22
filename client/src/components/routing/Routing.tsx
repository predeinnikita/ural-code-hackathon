import { FC, Suspense } from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "./routes";
import { AppContainer } from "../app-container";
import { AuthPage } from "../../pages/auth-page/AuthPage";
import { NotFoundPage } from "../../pages/not-found-page/NotFoundPage";
import { VacancyPage } from "../../pages/vacancy-page/VacancyPage";
import { VacancyListPage } from "../../pages/vacancy-list-page/VacancyListPage";
import { StatisticsPage } from "../../pages/statistics-page/StatisticsPage";
import { CreateVacancy } from "../../pages/create-vacancy/CreateVacancy";
import { StudentClaimListPage } from "../../pages/student-claim-list-page/StudentClaimListPage";
import { OrganizationClaimListPage } from "../../pages/organization-claim-list-page/OrganizationClaimListPage";
import { StudentClaimPage } from "../../pages/student-claim-page/StudentClaimPage";
import { ProfilePage } from "../../pages/profile-page/ProfilePage";
import { MainPage } from "../../pages/main-page/MainPage";
import { OrganizationPage } from "../../pages/organization-page/OrganizationPage";
import { WorksPage } from "../../pages/works-page/WorksPage";

export const Routing: FC = () => {
  return (
    <Suspense fallback={<>Загрузка...</>}>
      <AppContainer>
        <Routes>
          <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
          <Route path={ROUTES.AUTH_PAGE} element={<AuthPage />} />
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
          <Route
            path={ROUTES.CREATE_VACANCY_PAGE}
            element={<CreateVacancy />}
          />
          <Route path={ROUTES.STATISTICS_PAGE} element={<StatisticsPage />} />
          <Route path={ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
          <Route path={ROUTES.WORKS_PAGE} element={<WorksPage />} />
          <Route
            path={ROUTES.ORGANIZATION_PAGE}
            element={<OrganizationPage />}
          />

          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </Suspense>
  );
};
