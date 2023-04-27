import React from "react";

type Props = {
  children: React.ReactNode;
  kind:
    | "default"
    | "mint"
    | "info"
    | "error"
    | "luxury"
    | "warning"
    | "success";
  type: "outlined" | "filled";
};

export default function Pill(props: Props) {
  return (
    <div className="p-1 select-none">
      <div
        className={`flex items-center justify-start h-8 gap-1 p-1 ${
          props.type === "outlined"
            ? `border-[0.5px] ${
                props.kind === "default"
                  ? "border-vapourmintWhite-100"
                  : props.kind === "mint"
                  ? "border-vapourmintMint-300"
                  : props.kind === "info"
                  ? "border-vapourmintBlue-300"
                  : props.kind === "error"
                  ? "border-vapourmintError-500"
                  : props.kind === "luxury"
                  ? "border-vapourmintLuxury-300"
                  : props.kind === "warning"
                  ? "border-vapourmintWarning-500"
                  : props.kind === "success" && "border-vapourmintSuccess-500"
              }`
            : props.kind === "default"
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
        } rounded-full w-fit ${
          props.type === "filled"
            ? `${
                props.kind === "default"
                  ? "text-vapourmintBlack-300"
                  : "text-vapourmintWhite-100"
              }`
            : props.kind === "default"
            ? "text-vapourmintWhite-100"
            : props.kind === "mint"
            ? "text-vapourmintMint-300"
            : props.kind === "info"
            ? "text-vapourmintBlue-300"
            : props.kind === "error"
            ? "text-vapourmintError-500"
            : props.kind === "luxury"
            ? "text-vapourmintLuxury-300"
            : props.kind === "warning"
            ? "text-vapourmintWarning-500"
            : props.kind === "success" && "text-vapourmintSuccess-500"
        } `}
      >
        {props.children}
      </div>
    </div>
  );
}
