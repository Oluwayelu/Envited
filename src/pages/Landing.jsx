import React from "react";
import { Link } from "react-router-dom";
import { CREATE } from "routes/CONSTANTS";

const Landing = () => {
  return (
    <div className="lg:h-screen max-w-7xl px-10 mx-auto flex flex-col items-center space-y-5">
      <div className="w-full h-full flex flex-col-reverse lg:flex-row space-y-5">
        <div className="mt-10 w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T100907Z&X-Amz-Expires=86400&X-Amz-Signature=fbc9a1f847a44e0e3eb3038590b0ab808011fe249cfdc279e6878ba79be88ff3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
            alt="landing"
            className="w-2/3 lg:w-full h-full lg:h-4/5"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-5">
          <h1 className="text-3xl md:text-6xl font-bold text-primary-400">
            Imagine if <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-100">
              Snapchat
            </span>
            <br /> had events
          </h1>
          <p className="text-xl md:text-3xl text-neutral-400">
            Easily host and share events with your friends across any social
            media.
          </p>

          <button className="hidden lg:block px-5 py-3 text-white text-lg bg-gradient-to-r from-primary-200 to-primary-100 rounded-lg">
            <Link to={CREATE}>🎉 Create my event</Link>
          </button>
        </div>
      </div>
      <button className="lg:hidden px-5 py-2 text-white bg-gradient-to-r from-primary-200 to-primary-100 rounded-lg">
        <Link to={CREATE}>🎉 Create my event</Link>
      </button>
    </div>
  );
};

export default Landing;
