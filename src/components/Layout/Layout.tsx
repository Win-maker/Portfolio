import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <header className="flex-none">
        <Header />
      </header>


      <main className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
