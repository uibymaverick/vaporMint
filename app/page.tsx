"use client";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import TextInput from "@/components/molecules/TextInput";
import TextareaInput from "@/components/molecules/TextareaInput";
import SearchBar from "@/components/molecules/SearchBar";
import Divider from "@/components/molecules/Divider";
import CheckBox from "@/components/molecules/CheckBox";
import Switch from "@/components/molecules/Switch";
import Avatar from "@/components/molecules/Avatar";
import Pill from "@/components/molecules/Pill";
import Tick from "@/components/molecules/Tick";
import Radio from "@/components/molecules/Radio";
import Toast from "@/components/molecules/Toast";
import Notification from "@/components/molecules/Notification";
import Button from "@/components/molecules/Button";
import Loader from "@/components/molecules/Loader";
import Fab from "@/components/molecules/Fab";
import Modal from "@/components/molecules/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [first, setfirst] = useState("");
  const [check, setcheck] = useState(false);
  const [second, setsecond] = useState("");

  return (
    <main className="flex flex-col items-center justify-start min-h-screen gap-4 p-2">
      <SearchBar
        onChange={(e) => setfirst(e.target.value)}
        onClear={() => setfirst("")}
        value={first}
        placeholder={"Search here"}
      />
      <CheckBox
        text={"terms"}
        checked={check}
        onChange={() => setcheck(!check)}
      />
      <Switch kind="danger" on={check} onChange={() => setcheck(!check)} />
      <Tick color="green" />
      <Avatar size="sm" kind="luxury" />
      <Button
        handleClick={() => console.log("adsfasf")}
        kind="info"
        type="solid"
        size="base"
      >
        click me
      </Button>
      <Button
        handleClick={() => console.log("adsfasf")}
        kind="info"
        type="outlined"
        size="base"
      >
        click me
      </Button>
      <Radio
        flex="row"
        value={second}
        onChange={setsecond}
        options={[
          { color: "default", option: "react" },
          { color: "default", option: "next" },
          { color: "luxury", option: "python" },
        ]}
      />
      <Pill type="filled" kind="luxury">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>

        <span>text</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Pill>
      <Toast
        onCancel={() => console.log("canceled")}
        message={"hello"}
        kind="info"
      />
      <Loader progress={99} />
      <Divider kind="center" size={1}></Divider>
      <Notification
        onCancel={() => console.log("canceled")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
        }
        message={"hello"}
        description={"thius is m,e"}
        kind="success"
      />
      <TextInput
        title="name"
        // error="something"
        onChange={(e) => setfirst(e.target.value)}
        value={first}
        placeholder={"type here"}
        count={32}
      />
      <TextareaInput
        title="NAME"
        error="something"
        onChange={(e) => setfirst(e.target.value)}
        value={first}
        placeholder={"type here"}
        count={32}
      />
      <Fab
        size="small"
        onClick={() => console.log("aljbsdufaisv")}
        kind="luxury"
        text="new event"
        showText={check}
      />
      {check && (
        <Modal
          title={"Sahil"}
          description={
            "Vaporwave is a microgenre of electronic music, visual art style, and Internet meme "
          }
          onCancel={() => setcheck(false)}
        >
          <span className="text-black">aiugfidededededdeedededeai</span>
        </Modal>
      )}
    </main>
  );
}
