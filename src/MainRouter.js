import { Routes, Route } from "react-router-dom";
import MainDisplay from "./view/main";
import MainLayout from "./layouts/mainLayout";
import AdminDisplay from "./view/admin";



function MainRouter() {


  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<MainDisplay/>}></Route>
        <Route path="/admin" element={<AdminDisplay/>}></Route>
      </Route>
    </Routes>
  );
}

export default MainRouter;
