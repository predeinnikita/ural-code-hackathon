import { FC, Suspense } from "react";
import { Route, Routes, Outlet } from "react-router";
import { ROUTES } from "./routes";
import { AppContainer } from "../app-container";
import { AuthPage } from "../../pages/auth-page/AuthPage";
import { NotFoundPage } from "../../pages/not-found-page/NotFoundPage";
import React from "react";

export const Routing: FC = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <AppContainer>
        <Routes>
          <Route path={ROUTES.AUTHORIZED_PAGE} element={<AuthPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContainer>
    </Suspense>
  );
};
