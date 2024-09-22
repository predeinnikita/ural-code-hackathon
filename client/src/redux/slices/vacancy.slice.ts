import { createAppSlice } from "./auth.slice";
import { VacancyConnector } from "../../api/vacancy-connector";
import { CreateVacancyPayload } from "../../typing/vacancy";

const vacancySlice = createAppSlice({
  name: "vacancy",
  initialState: {},
  reducers: (state) => ({
    create: state.asyncThunk(async (payload: CreateVacancyPayload) => {
      return await VacancyConnector.create(payload);
    }),
  }),
});

const { actions, reducer } = vacancySlice;

export const vacancyReducer = reducer;
export const { create: createVacancyAsync } = actions;
