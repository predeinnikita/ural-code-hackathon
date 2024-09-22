import axios from "axios";
import { URLS } from "./urls";
import { CreateVacancyPayload } from "../typing/vacancy";

export class VacancyConnector {
  public static create(payload: CreateVacancyPayload) {
    return axios.post<{ id: number }>(URLS.VACANCY.CREATE, payload);
  }
}
