import React from "react";

type Props = {
  flex: "col" | "row";
  value: String;
  disabled?: Boolean;

  onChange: Function;
  options: {
    color:
      | "default"
      | "mint"
      | "info"
      | "danger"
      | "luxury"
      | "warning"
      | "success";
    option: String;
  }[];
};

export default function Radio(props: Props) {
  return (
    <div
      className={`flex ${
        props.flex === "col" && "flex-col"
      } gap-2 items-center justify-start p-1`}
    >
      {props.options.map((option, id) => (
        <div
          key={id}
          onClick={() => (props.disabled ? "" : props.onChange(option.option))}
          className="flex items-center gap-2 p-1 cursor-pointer select-none"
        >
          <div
            className={`w-6 h-6  ${
              props.disabled
                ? "border-vapourmintBlack-200"
                : option.color === "default"
                ? "border-vapourmintWhite-100"
                : option.color === "mint"
                ? "border-vapourmintMint-300"
                : option.color === "info"
                ? "border-vapourmintBlue-300"
                : option.color === "danger"
                ? "border-vapourmintError-500"
                : option.color === "luxury"
                ? "border-vapourmintLuxury-300"
                : option.color === "warning"
                ? "border-vapourmintWarning-500"
                : option.color === "success" && "border-vapourmintSuccess-500"
            } border-[2px] rounded-lg flex items-center justify-center`}
          >
            <div
              className={`w-4 h-4 ${
                props.value === option.option ? "scale-100" : "scale-0"
              } ${
                option.color === "default"
                  ? "bg-vapourmintWhite-100"
                  : option.color === "mint"
                  ? "bg-vapourmintMint-300"
                  : option.color === "info"
                  ? "bg-vapourmintBlue-300"
                  : option.color === "danger"
                  ? "bg-vapourmintError-500"
                  : option.color === "luxury"
                  ? "bg-vapourmintLuxury-300"
                  : option.color === "warning"
                  ? "bg-vapourmintWarning-500"
                  : option.color === "success" && "bg-vapourmintSuccess-500"
              } transition-all ease-in-out rounded-[4px] origin-center`}
            ></div>
          </div>
          {option.option && (
            <span className="text-sm font-semibold tracking-wide">
              {option.option}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
