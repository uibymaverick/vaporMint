import React from "react";

type Props = {
  on: Boolean;
  onChange: Function;
  disabled?: Boolean;
  kind:
    | "default"
    | "mint"
    | "info"
    | "danger"
    | "luxury"
    | "warning"
    | "success";
};

export default function Switch(props: Props) {
  return (
    <div
      onClick={() => (props.disabled ? "" : props.onChange())}
      className="p-1 cursor-pointer "
    >
      <div
        className={`h-fit  w-11 ${
          props.disabled
            ? "border-vapourmintBlack-200"
            : props.kind === "default"
            ? "border-vapourmintWhite-100"
            : props.kind === "mint"
            ? "border-vapourmintMint-300"
            : props.kind === "info"
            ? "border-vapourmintBlue-300"
            : props.kind === "danger"
            ? "border-vapourmintError-500"
            : props.kind === "luxury"
            ? "border-vapourmintLuxury-300"
            : props.kind === "warning"
            ? "border-vapourmintWarning-500"
            : props.kind === "success" && "border-vapourmintSuccess-500"
        } border-[1px] p-[3px] rounded-lg flex items-center  justify-start `}
      >
        <div
          className={`h-4 w-4  rounded-[4px] transition-all ease-in-out ${
            props.on
              ? `translate-x-5 ${
                  props.kind === "default"
                    ? "bg-vapourmintWhite-100"
                    : props.kind === "mint"
                    ? "bg-vapourmintMint-300"
                    : props.kind === "info"
                    ? "bg-vapourmintBlue-300"
                    : props.kind === "danger"
                    ? "bg-vapourmintError-500"
                    : props.kind === "luxury"
                    ? "bg-vapourmintLuxury-300"
                    : props.kind === "warning"
                    ? "bg-vapourmintWarning-500"
                    : props.kind === "success" && "bg-vapourmintSuccess-500"
                }`
              : "bg-vapourmintBlack-200"
          }`}
        ></div>
      </div>
    </div>
  );
}
