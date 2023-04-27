import React, { useEffect, useState } from "react";

type Props = {
  title?: String;
  description?: String;
  onCancel: Function;
  children: React.ReactNode;
};

export default function Modal(props: Props) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 200);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex items-end justify-center w-screen h-screen select-none transition-all ease-in-out  backdrop-blur-sm  ${
        animation ? "bg-vapourmintBlack-300/25" : "bg-vapourmintBlack-300/0"
      } transition-all ease-in-out`}
    >
      <div
        className={`flex flex-col max-w-xl items-center w-full h-fit   ${
          animation ? "translate-y-0" : "translate-y-full"
        } transition-all ease-in-out`}
      >
        <div className="flex w-full h-2 px-2">
          <span className="flex-grow h-2 rounded-t-lg bg-vapourmintBlack-100" />
        </div>

        <div className="flex flex-col items-start justify-start w-full p-6 rounded-t-lg bg-vapourmintWhite-100">
          <div className="flex items-center justify-between w-full">
            <span className="text-3xl font-black text-vapourmintBlack-300">
              {props.title}
            </span>
            <svg
              onClick={() => {
                setAnimation(false);
                setTimeout(() => {
                  props.onCancel();
                }, 200);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-vapourmintBlack-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <span className="w-full text-lg font-medium text-vapourmintBlack-100">
            {props.description}
          </span>
          {props.children}
        </div>
      </div>
    </div>
  );
}
