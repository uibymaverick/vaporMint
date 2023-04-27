import React from "react";

type Props = {
  text: String;
  size: "xsmall" | "small" | "base";
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  showText: Boolean;
  kind:
    | "default"
    | "mint"
    | "info"
    | "danger"
    | "luxury"
    | "warning"
    | "success";
};

function Fab(props: Props) {
  return (
    <div
      onClick={props.onClick}
      className={`flex items-center w-fit gap-2  cursor-pointer select-none  rounded-l-full ${
        props.size === "xsmall" ? "p-2" : props.size === "small" ? "p-3" : "p-5"
      }  ${
        props.kind === "default"
          ? "bg-vapourmintWhite-100 text-vapourmintBlack-300"
          : props.kind === "mint"
          ? "bg-vapourmintMint-300 text-vapourmintBlack-300"
          : props.kind === "info"
          ? "bg-vapourmintBlue-300 text-vapourmintWhite-100"
          : props.kind === "danger"
          ? "bg-vapourmintError-500 text-vapourmintWhite-100"
          : props.kind === "luxury"
          ? "bg-vapourmintLuxury-300 text-vapourmintWhite-100"
          : props.kind === "warning"
          ? "bg-vapourmintWarning-500 text-vapourmintWhite-100"
          : props.kind === "success" &&
            "bg-vapourmintSuccess-500 text-vapourmintWhite-100"
      }   transition-all ease-in-out  `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      {props.showText && (
        <span className={`mr-1 text-lg font-semibold`}>{props.text}</span>
      )}
    </div>
  );
}

export default Fab;
