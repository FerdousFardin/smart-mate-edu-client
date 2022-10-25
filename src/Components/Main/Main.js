import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Shared/Footer/Footer";
import { Header } from "../../Shared/Header/Header";
import { LeftSideNav } from "../../Shared/LeftSideNav/LeftSideNav";

export const Main = () => {
  return (
    <>
      <Header />
      <main className="grid grid-cols-6">
        <section className="">
          <LeftSideNav />
        </section>
        <section className="col-span-5  min-h-screen">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};
