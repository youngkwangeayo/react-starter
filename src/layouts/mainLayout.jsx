import { Outlet } from "react-router-dom";
import HeaderLayout from "./header";

export default function MainLayout (props) {

   return (
        <div className="latout mainlayout">
            <HeaderLayout/>
            <Outlet/>
        </div>
   );
};