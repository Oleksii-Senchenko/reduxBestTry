import DashBoardPages from "../pages/DashBoardPages";
import LoginPage from "../pages/LoginPage";
import Layout from "./Layout";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashBoardPages />} />
      </Route>
    </Routes>
  );
}
export default App;
