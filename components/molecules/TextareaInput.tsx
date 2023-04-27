import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  title?: String;
  error?: String;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: String;
  placeholder?: String;
  count?: number;
};

function TextareaInput(props: Props) {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-1 py-1">
      {props.title && (
        <span className="text-xs font-semibold tracking-widest uppercase text-vapourmintWhite-100">
          {props.title}
        </span>
      )}
      <textarea
        className="w-full h-20 text-base border-b rounded-none text-vapourmintWhite-100 bg-vapourmintBlack-300 hover:resize-y scrollbar scrollbar-thumb-gray-900 scrollbar-track-black border-vapourmintBlack-200 focus:border-vapourmintWhite-100 focus:outline-none "
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
      <div className="flex items-center justify-between w-full">
        {props.error && (
          <span className="text-xs tracking-wider uppercase text-vapourmintError-500 ">
            {props.error}
          </span>
        )}
        {/* {props.count && props.value?.length >= props.count && (
          <span className="text-xs font-semibold tracking-wider text-red-700 uppercase ">
            word Limit exided
          </span>
        )} */}
        {props.count && (
          <span
            className={`ml-auto ${
              props.value?.length >= props.count
                ? "text-lg text-vapourmintError-500 font-bold"
                : "text-xs text-vapourmintWarning-500 font-semibold"
            }    font-semibold uppercase transition-all ease-in-out`}
          >
            {props.value?.length} / {props.count}
          </span>
        )}
      </div>
    </div>
  );
}

export default TextareaInput;
