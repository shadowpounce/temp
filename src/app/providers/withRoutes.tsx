import { BrowserRouter, Routes } from "react-router-dom";

export const withRoutes = (component: () => React.ReactNode) => () => {
  return (
    <BrowserRouter>
      <Routes>{component()}</Routes>
    </BrowserRouter>
  );
};
