import React from "react";

export const CreateAccount = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg pt-6 pb-7 rounded-lg text-center">
        <h3 className=" text-2lg text-gray-800">Log In</h3>
        <form className="flex flex-col mt-5 mb-5 px-5">
          <input placeholder="Email" className="input mb-3" />
          <input placeholder="Password" className="input" />
          <button className="mt-3 btn">Log In</button>
        </form>
      </div>
    </div>
  );
};
