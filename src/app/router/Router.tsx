import { Route, Routes } from "react-router-dom";
import { HomePage, AuthPage } from "../../pages";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default Router;
