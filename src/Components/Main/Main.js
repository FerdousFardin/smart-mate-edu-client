import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../../Shared/Footer/Footer";
import { Header } from "../../Shared/Header/Header";
import { LeftSideNav } from "../../Shared/LeftSideNav/LeftSideNav";

export const Main = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main className={location.pathname === "/" && "grid grid-cols-6"}>
        {location.pathname !== "/" ? (
          <section>
            <Outlet />
          </section>
        ) : (
          <>
            <section className="">
              <LeftSideNav />
            </section>
            <section className="col-span-5  min-h-screen">
              <Outlet />
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
