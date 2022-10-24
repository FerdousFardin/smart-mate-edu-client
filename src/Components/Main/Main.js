import React from "react";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <header />
      <main>
        <section className="text-9xl">Hi</section>
        <section>
          <Outlet />
        </section>
      </main>
      <footer />
    </>
  );
};
