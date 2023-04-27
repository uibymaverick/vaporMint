"use client";
import React, { Children, useEffect, useState } from "react";

type buttonProps = {
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  kind: "mint" | "info" | "success" | "warning" | "luxury" | "danger" | "white";
  type: "solid" | "outlined" | "ghost";
  size: "small" | "base";
  children: any;
};
function Button({ kind, type, size, handleClick, children }: buttonProps) {
  const [animation, setAnimation] = useState(false);
  const animateClick = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 178);
  };

  return (
    <div
      onClick={(e) => {
        animateClick();
        handleClick(e);
      }}
      className={`relative w-full select-none ${
        size === "small" ? "h-[44px]" : "h-[60px]"
      }`}
    >
      {type === "solid" && (
        <>
          <button
            className={`
          ${
            kind === "mint" &&
            "   bg-vapourmintMint-300 text-vapourmintBlack-300"
          } ${
              kind === "info" &&
              "   bg-vapourmintBlue-300 text-vapourmintWhite-100 "
            }  ${
              kind === "luxury" &&
              "   bg-vapourmintLuxury-300 text-vapourmintWhite-100 "
            }  ${
              kind === "success" &&
              "   bg-vapourmintSuccess-500 text-vapourmintWhite-100 "
            } ${
              kind === "warning" &&
              "   bg-vapourmintWarning-500 text-vapourmintWhite-100 "
            }  ${
              kind === "danger" &&
              "    bg-vapourmintError-500 text-vapourmintWhite-100 "
            }  ${
              kind === "white" &&
              "   bg-vapourmintWhite-100 text-vapourmintBlack-300 "
            }  absolute shadow-md z-20 transition-all ease-in-out ${
              animation ? "-bottom-1 -right-1" : " bottom-0  right-0"
            }    text-lg font-bold  p-4 rounded-lg h-full w-full  flex justify-center items-center gap-4`}
          >
            {children}
          </button>
          <div className="absolute z-10 w-full h-full rounded-lg -bottom-1 -right-1 bg-vapourmintWhite-100"></div>
        </>
      )}
      {type === "outlined" && (
        <>
          <button
            className={`border-2 
          ${
            kind === "mint" &&
            " border-vapourmintMint-300 bg-vapourmintBlack-300 text-vapourmintMint-300"
          } ${
              kind === "info" &&
              " border-vapourmintBlue-300 bg-vapourmintBlack-300 text-vapourmintBlue-300 "
            }  ${
              kind === "luxury" &&
              " border-vapourmintLuxury-300 bg-vapourmintBlack-300 text-vapourmintLuxury-300 "
            }  ${
              kind === "success" &&
              " border-vapourmintSuccess-500 bg-vapourmintBlack-300 text-vapourmintSuccess-500 "
            } ${
              kind === "warning" &&
              " border-vapourmintWarning-500 bg-vapourmintBlack-300 text-vapourmintWarning-500 "
            }  ${
              kind === "danger" &&
              " border-vapourmintError-500 bg-vapourmintBlack-300 text-vapourmintError-500 "
            }  ${
              kind === "white" &&
              " border-vapourmintWhite-100 bg-vapourmintBlack-300 text-vapourmintWhite-300 "
            }  absolute shadow-md z-20 transition-all ease-in-out  ${
              animation ? "-bottom-1 -right-1" : " bottom-0  right-0"
            } text-lg font-bold  p-4 rounded-lg h-full w-full  flex justify-center items-center gap-4`}
          >
            {children}
          </button>
          <div className="absolute z-10 w-full h-full border-2 rounded-lg -bottom-1 -right-1 border-y-vapourmintWhite-100"></div>
        </>
      )}
      {type === "ghost" && (
        <>
          <button
            className={` 
          ${
            kind === "mint" && "bg-vapourmintBlack-300 text-vapourmintMint-300"
          } ${
              kind === "info" &&
              "bg-vapourmintBlack-300 text-vapourmintBlue-300 "
            }  ${
              kind === "luxury" &&
              "bg-vapourmintBlack-300 text-vapourmintLuxury-300 "
            }  ${
              kind === "success" &&
              " bg-vapourmintBlack-300 text-vapourmintSuccess-500 "
            } ${
              kind === "warning" &&
              " bg-vapourmintBlack-300 text-vapourmintWarning-500 "
            }  ${
              kind === "danger" &&
              "bg-vapourmintBlack-300 text-vapourmintError-500 "
            }  ${
              kind === "white" &&
              "bg-vapourmintBlack-300 text-vapourmintWhite-100 "
            }  absolute shadow-md z-20 transition-all ease-in-out  ${
              animation ? "-bottom-1 -right-1" : " bottom-0  right-0"
            } text-lg font-bold  p-4 rounded-lg h-full w-full  flex justify-center items-center gap-4`}
          >
            {children}
          </button>
        </>
      )}
    </div>
  );
}

export default Button;
