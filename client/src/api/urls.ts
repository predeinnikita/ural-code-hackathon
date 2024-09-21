import { ApiType, ConnectorType } from "../typing/api";

export const URLS = {
  [ConnectorType.AUTH]: {
    LOGIN: `${ApiType.API}/auth/login`,
    REGISTRATION_STUDENT: `${ApiType.API}/register/student`,
    REGISTRATION_SIGMA: `${ApiType.API}/register/busines`,
    REGISTRATION_EDUCATION: `${ApiType.API}/register/educational-org`,
  },
  [ConnectorType.VACANCY]: {
    CREATE: `${ApiType.API}/vacancies`,
  },
  [ConnectorType.COMMON]: {
    GET_INFO: `${ApiType.API}/`,
  },
};
