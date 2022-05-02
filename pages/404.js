import Image from "next/image";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-grow align-middle min-h-screen h-full w-full bg-[#fbfbfb]">
        <div className="max-w-4xl m-auto flex">
          <div className="flex flex-col items-center py-2 px-6 text-center max-w-md">
            <div className="bg-white items-center border border-gray-200 rounded-lg p-10 flex flex-col">
              <div className="relative w-[318px] h-[113px]">
                <Image
                  layout="responsive"
                  objectFit="contain"
                  priority
                  loading="eager"
                  width={318}
                  height={113}
                  src="https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/2880px-Instagram_logo.png"
                  alt=""
                />
              </div>
              <p className="font-xs italic mt-1">
                This is an Instagram clone app built for educational purposes
                only.
              </p>
              <div className="mt-10 mb-6">
                <p className="text-2xl font-bold mb-8">404 Page Not Found!</p>
                <p className="font-bold">
                  Oops! LOOKS LIKE THIS PAGE GOT LOST IN THE MATRIX.
                </p>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-400 p-6 rounded-lg 
                w-full text-white font-semibold relative
                active:scale-95 drop-shadow-md text-2xl
                cursor-pointer transition-all duration-100 ease-out"
                onClick={() => router.push("/")}
              >
                Get Back Home!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
