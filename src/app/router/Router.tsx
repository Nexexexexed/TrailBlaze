import { Route, Routes } from "react-router-dom";
import { HomePage, AuthPage, ProfilePage } from "../../pages";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default Router;
