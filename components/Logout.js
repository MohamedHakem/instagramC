// import Button from "@material-tailwind/react/Button";
// import Icon from "@material-tailwind/react/Icon";
import { signOut } from "next-auth/react";
import { useCallback, useEffect } from "react";

export default function Header({ setShow }) {
  // handleEscape and the useEffect are just for the compatibility and cleaning up everything.
  const handleEscape = useCallback((e) => {
    if (e.keyCode === 27) {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);

  return (
    <>
      <ul className="absolute -left-16 top-9 shadow-md rounded-md text-gray-700 pt-1 z-10">
        <li className="bg-white hover:bg-gray-100 transition-color duration-300 border-2 rounded-md">
          <button
            className="h-auto w-auto px-3 py-1 inline-flex items-center !border-0"
            onClick={signOut}
          >
            {/* <Icon name="logout" size="2xl" /> */}
            <span className="font-semibold">Logout</span>
          </button>
        </li>
      </ul>
      <button
        onClick={() => setShow(false)}
        className="fixed inset-0 bg-gray-[20] h-full w-full focus:outline-none cursor-default"
      ></button>
    </>
  );
}
