import React from "react";

type Props = {
  message: String;
  onCancel: Function;
  kind?:
    | "default"
    | "mint"
    | "info"
    | "error"
    | "luxury"
    | "warning"
    | "success";
};

export default function Toast(props: Props) {
  return (
    <div className="w-full p-1 select-none">
      <div
        className={`flex flex-col gap-0 overflow-hidden  rounded-lg ${
          props.kind === "default"
            ? "bg-vapourmintWhite-100"
            : props.kind === "mint"
            ? "bg-vapourmintMint-300"
            : props.kind === "info"
            ? "bg-vapourmintBlue-300"
            : props.kind === "error"
            ? "bg-vapourmintError-500"
            : props.kind === "luxury"
            ? "bg-vapourmintLuxury-300"
            : props.kind === "warning"
            ? "bg-vapourmintWarning-500"
            : props.kind === "success" && "bg-vapourmintSuccess-500"
        }`}
      >
        <div className="flex items-center px-4 py-3 ">
          <span
            className={`flex-grow text-lg font-semibold tracking-wide  ${
              props.kind === "default"
                ? "text-vapourmintBlack-300"
                : "text-vapourmintWhite-100"
            }`}
          >
            {props.message}
          </span>
          <svg
            onClick={() => props.onCancel()}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 cursor-pointer ${
              props.kind === "default"
                ? "text-vapourmintBlack-300"
                : "text-vapourmintWhite-100"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>{" "}
        <span
          style={{ height: `1px` }}
          className={`  w-full  bg-gradient-to-r  from-vapourmintWhite-100 to-vapourmintBlack-300`}
        />
      </div>
    </div>
  );
}
