import { createSelector } from "@reduxjs/toolkit";
import { Store } from "../../typing/store/store";

//@ts-ignore
const commonSelector = (state: Store) => state.common;

export const appInfoSelector = createSelector([commonSelector], (state) => {
  return state.info;
});
