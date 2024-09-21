import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { AuthConnector } from "../../api/auth-connector";
import { BusinesForm, LoginForm, StudentForm } from "../../typing/auth";
import { CommonConnector } from "../../api/common-connector";

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const commonSlice = createAppSlice({
  name: "common",
  initialState: {
    info: {
      name: "",
      businesContext: "",
    },
  },
  reducers: (state) => ({
    getInfo: state.asyncThunk(
      async () => {
        const { data } = await CommonConnector.getInfo();

        return data;
      },
      {
        fulfilled: (state, action) => {
          state.info = action.payload;
        },
      }
    ),
  }),
});

const { actions, reducer } = commonSlice;

export const authReducer = reducer;
export const {} = actions;
