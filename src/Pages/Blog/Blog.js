import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";

export const Blog = () => {
  return (
    <>
      <section className="flex flex-col justify-center w-full items-center lg:items-start lg:pl-60 gap-5 lg:gap-10 mt-5">
        <img
          className="lg:w-2/4 rounded-lg"
          src={"https://nordicapis.com/wp-content/uploads/What-is-CORS-.png"}
          alt=""
        />
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-10"
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            alt=""
          />
          <h4>
            by <span className="font-semibold">Ferdous Fardin</span>
          </h4>
          <span className="border border-l-2 border-slate-600"></span>
          <span className="flex gap-2 items-center">
            <MdLibraryBooks />
            <h4>Middleware</h4>
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">What is CORS?</h1>
        </div>
        <div className="uppercase text-sm bg-[#a0ce4e] w-fit px-8 py-4 rounded-lg text-white">
          Overview
        </div>
        <p className="lg:w-2/4 mx-5 lg:mx-0 leading-7 tracking-wider">
          <span className="font-semibold">Cross-Origin Resource Sharing</span>{" "}
          or CORS is designed to support all of these use cases while still
          enabling robust security options. CORS is a{" "}
          <a
            className="link-hover link-primary visited:link-accent"
            target={"_blank"}
            href="https://www.w3.org/TR/cors/"
          >
            W3C Standard
          </a>{" "}
          that serves as a middle ground – in essence, it allows a resource to
          allow some cross-origin requests while still rejecting others. This is
          safer and more flexible than other solutions that have been attempted
          due to the fact that it’s inclusionary – everything that is included
          as part of the cross-origin allowance is explicitly stated and
          understood. This is part of the reason that CORS is often considered a
          boost to security. Other cross-origin options attempt to obfuscate the
          actual origin of the request – CORS, in comparison, simply allows that
          request to continue on through transformation and inclusion, which
          provides a higher level of granularity without the hackiness of other
          options. In a world of “all or nothing”, CORS gives options.
        </p>
      </section>
      <div className="divider"></div>
      <section className="flex flex-col justify-center w-full items-center lg:items-start lg:pl-60 gap-5 lg:gap-10">
        <img
          className="lg:w-2/4 rounded-lg border"
          src={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--XnV7nLnZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/cufhvx44o66bb32ll2l8.png"
          }
          alt=""
        />
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-10"
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            alt=""
          />
          <h4>
            by <span className="font-semibold">Ferdous Fardin</span>
          </h4>
          <span className="border border-l-2 border-slate-600"></span>
          <span className="flex gap-2 items-center">
            <MdLibraryBooks />
            <h4>Firebase</h4>
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-center lg:text-left ">
            Why Should You Use Google Firebase?
          </h1>
        </div>
        <div className="uppercase text-sm bg-[#a0ce4e] w-fit px-8 py-4 rounded-lg text-white">
          Overview
        </div>
        <p className="lg:w-2/4 mx-5 lg:mx-0 leading-7 tracking-wider">
          Firebase is a less technical and time-saving alternative to writing
          full-fledged backend code for dynamic apps. You might also want to
          consider leveraging this tool if you eventually wish to host and
          manage your app in the cloud. Being serverless, Firebase removes the
          need to worry about the technicalities of cloud server configuration.
          As a Google Cloud service, it also gives you access to other Google
          products and features, like Google Drive and Sheets. For instance, you
          can import dummy data from Google Sheets and use it temporarily to
          serve your app.With Firebase, it's pretty simple to connect and use
          built-in third-party authentication providers, including Google,
          Facebook, Twitter, among others. And if you want to use a pre-built
          authentication UI, you have it at your disposal as well.
        </p>
        <h1 className="lg:w-1/2 text-3xl font-bold text-center lg:text-left ">
          What other options do you have to implement authentication?
        </h1>
        <p className=" lg:w-2/4 mx-5 lg:mx-0 leading-7 tracking-wider">
          There are so many alternatiives for authentication out there besides
          Firebase. Among those, top User Authentication Platforms are:
          <ol className="list-decimal list-inside">
            <li>STYTCH</li>
            <li>Ory</li>
            <li>Superbase</li>
            <li>Okta</li>
            <li>PingIdentity</li>
            <li>Keycloak</li>
            <li>Frontegg</li>
            <li>Authress</li>
            <li>Auth0</li>
            <li>Amazon Cognito</li>
            <li>OneLogin</li>
          </ol>
        </p>
      </section>
      <div className="divider"></div>
      <section className="flex flex-col justify-center w-full items-center lg:items-start lg:pl-60 gap-5 lg:gap-10">
        <img
          className="lg:w-2/4 rounded-lg"
          src={"https://i.ibb.co/mCPMr1Z/1-Zg-Wg-OXWVt-GFCNpo-RSj-Od-Og.jpg"}
          alt=""
        />
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-10"
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            alt=""
          />

          <h4>
            by <span className="font-semibold">Ferdous Fardin</span>
          </h4>
          <span className="border border-l-2 border-slate-600"></span>
          <span className="flex gap-2 items-center">
            <MdLibraryBooks />
            <h4>React Router</h4>
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">
            {" "}
            How does the private route work?
          </h1>
        </div>
        <div className="uppercase text-sm bg-[#a0ce4e] w-fit px-8 py-4 rounded-lg text-white">
          Overview
        </div>
        <p className="lg:w-2/4 mx-5 lg:mx-0 leading-7 tracking-wider">
          A private route or a restricted route that unauthenticated user can
          see but can not access or see the contents within. PrivateRoute
          component is the blueprint for all private routes in the application.
          If the user is logged in, go on and display the component in question;
          otherwise, redirect the user to sign-in page. Additionally, we can
          define the logic of{" "}
          <code className="bg-[#e5e6e6] p-1 rounded">isLogin</code> utility
          function separately in{" "}
          <code className="bg-[#e5e6e6] p-1 rounded">utils</code> folder. If the
          authorised user goes to the sign-in page, we will redirect to private
          route.
        </p>
      </section>
      <div className="divider"></div>
      <section className="flex flex-col justify-center w-full items-center lg:items-start lg:pl-60 gap-5 lg:gap-10">
        <img
          className="lg:w-2/4 rounded-lg border"
          src={
            "https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png"
          }
          alt=""
        />
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-10"
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            alt=""
          />
          <h4>
            by <span className="font-semibold">Ferdous Fardin</span>
          </h4>
          <span className="border border-l-2 border-slate-600"></span>
          <span className="flex gap-2 items-center">
            <MdLibraryBooks />
            <h4>Node.js</h4>
          </span>
        </div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-center lg:text-left ">
            What is Node?
          </h1>
        </div>
        <div className="uppercase text-sm bg-[#a0ce4e] w-fit px-8 py-4 rounded-lg text-white">
          Overview
        </div>
        <p className="lg:w-2/4 mx-5 lg:mx-0 leading-7 tracking-wider">
          Node.js is an open-source, cross-platform JavaScript runtime
          environment and library for running web applications outside the
          client's browser. Ryan Dahl developed it in 2009, and its latest
          iteration, version 15.14, was released in April 2021. Developers use
          Node.js to create server-side web applications, and it is perfect for
          data-intensive applications since it uses an asynchronous,
          event-driven model.
        </p>
        <h1 className="lg:w-1/2 text-3xl font-bold text-center lg:text-left ">
          How it works?
        </h1>
        <p className=" lg:w-2/4 mx-5 lg:mx-0 mb-10 leading-7 tracking-wider">
          First of all just like other languages node comes with packages and
          modules. These are libraries of functions that we can import from npm
          (node package manager) into our code and utilize. If you have node
          installed on your computer, then you already have some basic modules
          installed. These are how we create a simple server, but I’ll get to
          that later. If you are familiar with JavaScript, then you know it is
          asynchronous and single threaded. The single thread is the event loop
          which is responsible for running all functions and requests. The
          asynchronous behavior is extremely important when using node, because
          it guarantees that the event loop is never blocked by a synchronous
          function.{" "}
          <a
            className="link-hover link-primary"
            href="https://medium.com/@lukepierotti/node-js-what-is-it-and-how-does-it-work-e3e83d054662"
          >
            Read More here...
          </a>
        </p>
      </section>
    </>
  );
};
