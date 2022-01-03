import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Logout from "./Logout";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="border-b bg-white sticky top-0 z-10">
      <div className="flex justify-between max-w-5xl lg:mx-auto py-3 px-1 sm:px-2">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative inline-grid w-24 cursor-pointer"
        >
          <Image
            priority="true"
            src="https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/2880px-Instagram_logo.png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>

        {/* Middle: Search input */}
        <div className="max-w-xs">
          <div className="relative rounded-md">
            <div className="hidden sm:inline-flex absolute inset-y-0 pl-3 items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="hidden sm:block bg-gray-50 w-full pl-10 sm:text-sm
        border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-3">
          {session ? (
            <>
              <HomeIcon
                onClick={() => router.push("/")}
                className="navBtn z-10 cursor-pointer"
              />
              <div className="relative navBtn cursor-pointer">
                <PaperAirplaneIcon className="navBtn h-7 rotate-45 z-10" />
                <div
                  className="absolute -top-1 
                -right-2 text-xs w-5 h-5
                bg-red-500 rounded-full 
                flex justify-center animate-pulse
                text-white"
                >
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn z-10 cursor-pointer"
              />
              <HeartIcon className="navBtn z-10 cursor-pointer" />
              <div className="relative inline-block h-8 ml-2 justify-center cursor-pointer items-baseline">
                <button
                  className="relative w-8 h-8 inline-flex items-center align-middle z-10 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <Image
                    priority="true"
                    className="rounded-full cursor-pointer z-10"
                    src={session?.user?.image}
                    layout="fill"
                    alt="profile pic"
                  />
                </button>
                {show && <Logout setShow={setShow} />}
              </div>
            </>
          ) : (
            <button
              onClick={signIn}
              className="flex-auto inline-flex relative active:scale-95 border border-gray-400 
              cursor-pointer transition-all duration-100 ease-out px-2 py-1 items-center
              rounded-sm text-gray-400 h-7 w-auto font-normal hover:text-gray-600 hover:border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span className="pl-2">Login</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
