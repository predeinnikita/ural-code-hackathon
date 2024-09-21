export enum ROUTES {
  AUTH_PAGE = "/auth",
  AUTHORIZED_PAGE = "/",
  MAIN_PAGE = "/main",
  VACANCY_LIST_PAGE = "/vacancy-list",
  VACANCY_PAGE = "/vacancy",
  STUDENT_CLAIM_LIST_PAGE = "/student-claim-list",
  ORGANIZATION_CLAIM_LIST_PAGE = "/organization-claim-list",
  STUDENT_CLAIM_PAGE = "/student-claim",
  CLAIMS_PAGE = "/claims",
  STATISTICS = "/statistics",
  CREATE_VACANCY = "/create-vacancy",
  PROFILE = "/profile",
}

export const ROUTE_TITLES = {
  [ROUTES.AUTH_PAGE]: "Авторизация",
  [ROUTES.AUTHORIZED_PAGE]: "",
  [ROUTES.MAIN_PAGE]: "Главная",
  [ROUTES.VACANCY_LIST_PAGE]: "Список вакансий",
  [ROUTES.VACANCY_PAGE]: "Вакансия",
  [ROUTES.STUDENT_CLAIM_LIST_PAGE]: "Список заявок студентов",
  [ROUTES.ORGANIZATION_CLAIM_LIST_PAGE]: "Список заявок организаций",
  [ROUTES.STUDENT_CLAIM_PAGE]: "Заявка студента",
  [ROUTES.CLAIMS_PAGE]: "Список заявок",
  [ROUTES.STATISTICS]: "Статистика",
  [ROUTES.CREATE_VACANCY]: "Создать вакансию",
  [ROUTES.PROFILE]: "Профиль",
};
