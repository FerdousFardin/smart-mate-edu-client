import React from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { Footer } from "../../Shared/Footer/Footer";
import { Header } from "../../Shared/Header/Header";
import { LeftSideNav } from "../../Shared/LeftSideNav/LeftSideNav";

export const Main = () => {
  const location = useLocation();
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <>
      {/* <!-- header --> */}
      <Header />
      <main
        className={
          location.pathname === "/" || location.pathname.includes("categories")
            ? "grid grid-cols-6"
            : ""
        }
      >
        {location.pathname === "/" ||
        location.pathname.includes("categories") ? (
          <>
            <section className="">
              {/* <!-- component --> */}
              <div className="h-screen flex bg-gray-500">
                {/* <!-- container --> */}

                <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full  w-full pt-5">
                  {/* <!-- Side Nav Bar--> */}
                  {categories.map((category) => (
                    <LeftSideNav category={category} key={category.id} />
                  ))}
                </aside>
              </div>
            </section>
            <section className="col-span-5  min-h-screen">
              <Outlet />
            </section>
          </>
        ) : (
          <section>
            <Outlet />
          </section>
        )}
      </main>
      {/* <!-- footer --> */}
      <Footer />
    </>
  );
};
