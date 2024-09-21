import axios from "axios";
import { BusinesForm, LoginForm, StudentForm } from "../typing/auth";
import { URLS } from "./urls";

export class CommonConnector {
  public static getInfo() {
    return axios.get<{ name: string; businesContext: "" }>(
      URLS.COMMON.GET_INFO
    );
  }
}
