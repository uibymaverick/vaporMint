import React from "react";

type Props = {
  kind: "center" | "left-right" | "right-left" | "solid";
  size: Number;
};

export default function Divider(props: Props) {
  return (
    <span
      style={{ height: `${props.size}px` }}
      className={`my-1  w-full ${
        props.kind === "center" &&
        "bg-gradient-to-r from-vapourmintBlack-300 via-vapourmintWhite-100 to-vapofrom-vapourmintBlack-300"
      }
      ${
        props.kind === "left-right" &&
        "bg-gradient-to-r from-vapourmintWhite-100 to-vapourmintBlack-300"
      }
     ${
       props.kind === "right-left" &&
       "bg-gradient-to-l from-vapourmintWhite-100 to-vapourmintBlack-300"
     } ${props.kind === "solid" && "bg-vapourmintBlack-200"}`}
    />
  );
}
