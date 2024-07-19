import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../icons/logo";
import { useState } from "react";
import { login, signUp } from "../Mocks/Form";
import CloseButton from "../icons/closeButton";
import Eye from "../icons/eye";

const Form = ({ toggleModal }: { toggleModal?: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const toggleForm = () => {
    setIsSignUp((prev) => {
      return !prev;
    });
  };

  const values = isSignUp ? signUp : login;
  const isHome = location.pathname.includes("home");

  return (
    <>
      {!isHome && (
        <div className="mb-[49px]">
          <Logo />
        </div>
      )}
      <div className="flex flex-col justify-center border-2 rounded-lg w-full max-w-[463px] px-6 py-10 bg-[#27292D] relative">
        <div className="flex flex-col items-center mb-[45px]">
          <h2 className="text-[#6B6C70] font-medium text-sm tracking-[3%] mb-2">
            {values.title}
          </h2>
          <h1 className="text-[#ffffff] font-semibold text-lg leading-[21.7px]">
            {values.heading}
          </h1>
        </div>
        <form className="flex flex-col">
          {isSignUp ? (
            <>
              <label
                htmlFor="email"
                className="text-[#C5C7CA] text-sm font-medium leading-[16.94px] mb-[10px]"
              >
                Email
              </label>
              <input
                className="border border-[#7F8084] rounded bg-[#27292D] h-[43px] mb-4"
                type="email"
                id="email"
                placeholder="   Enter your email"
              />
              <label
                htmlFor="email"
                className="text-[#C5C7CA] text-sm font-medium leading-[16.94px] mb-[10px]"
              >
                Username
              </label>
              <input
                className="border border-[#7F8084] rounded bg-[#27292D] h-[43px] mb-4"
                type="text"
                id="username"
                placeholder="   Choose a preferred username"
              />
              <div>
                <label
                  htmlFor="username"
                  className="text-[#C5C7CA] text-sm font-medium leading-[16.94px] mb-[10px]"
                >
                  Password
                </label>
                <p></p>
              </div>
              <div className="w-full relative">
                <input
                  className="border border-[#7F8084] rounded bg-[#27292D] h-[43px] w-full"
                  type="password"
                  id="password"
                  placeholder="   Choose a strong password"
                />
                <div className="absolute top-[12px] right-[11px]">
                  <Eye />
                </div>
              </div>
            </>
          ) : (
            <>
              <label
                htmlFor="email"
                className="text-[#C5C7CA] text-sm font-medium leading-[16.94px] mb-[10px]"
              >
                Email or Username
              </label>
              <input
                className="border border-[#7F8084] rounded bg-[#27292D] h-[43px] mb-4"
                type="email"
                id="email"
                placeholder="   Enter your email or username"
              />
              <div>
                <label
                  htmlFor="username"
                  className="text-[#C5C7CA] text-sm font-medium leading-[16.94px] mb-[10px]"
                >
                  Password
                </label>
                <p></p>
              </div>
              <div className="w-full relative">
                <input
                  className="border border-[#7F8084] rounded bg-[#27292D] h-[43px] w-full"
                  type="password"
                  id="password"
                  placeholder="   Choose a strong password"
                />
                <div className="absolute top-[12px] right-[11px]">
                  <Eye />
                </div>
              </div>
            </>
          )}
          <button
            onClick={() => {
              return navigate("/home");
            }}
            className="w-full text-[#ffffff] text-base font-medium leading-[19.36px] bg-[#4A96FF] h-[43px] mt-[20px]"
          >
            {values.button}
          </button>
        </form>
        <p className="mt-3 text-[#7F8084]">
          {values.bottomLine}{" "}
          <span
            onClick={() => {
              return toggleForm();
            }}
            className="text-[#ffffff]"
          >
            {values.bottomLineSuffix}
          </span>
        </p>
        {isHome && (
          <div
            onClick={() => {
              return toggleModal?.();
            }}
            className="absolute top-7 right-4"
          >
            <CloseButton />
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
