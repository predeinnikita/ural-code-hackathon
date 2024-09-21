import {
  asyncThunkCreator,
  buildCreateSlice,
  createSlice,
} from "@reduxjs/toolkit";
import { AuthConnector } from "../../api/auth-connector";
import { BusinesForm, LoginForm, StudentForm } from "../../typing/auth";

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const authSlice = createAppSlice({
  name: "auth",
  initialState: {},
  reducers: (state) => ({
    login: state.asyncThunk(async (payload: LoginForm) => {
      return await AuthConnector.login(payload);
    }),
    registerStudentAsync: state.asyncThunk(async (payload: StudentForm) => {
      return await AuthConnector.registerStudent(payload);
    }),
    registerSigmaAsync: state.asyncThunk(async (payload: BusinesForm) => {
      return await AuthConnector.registerSigma(payload);
    }),
  }),
});

const { actions, reducer } = authSlice;

export const authReducer = reducer;
export const {
  login: loginAsync,
  registerSigmaAsync,
  registerStudentAsync,
} = actions;
