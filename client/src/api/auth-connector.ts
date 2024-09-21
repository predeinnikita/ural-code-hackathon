import axios from "axios";
import { BusinesForm, LoginForm, StudentForm } from "../typing/auth";
import { URLS } from "./urls";

export class AuthConnector {
  public static login(payload: LoginForm) {
    return axios.post<void>(URLS.AUTH.LOGIN, payload);
  }

  public static registerStudent(payload: StudentForm) {
    return axios.post<void>(URLS.AUTH.REGISTRATION_STUDENT, payload);
  }

  public static registerSigma(payload: BusinesForm) {
    return axios.post<void>(URLS.AUTH.REGISTRATION_SIGMA, payload);
  }
}
