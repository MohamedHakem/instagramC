import Image from "next/image";

export default function Custom500() {
  return;
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
            <p className="font-xs italic mt-4">
              This is an Instagram clone app built for educational purposes
              only.
            </p>
            <div className="mt-14 mb-6">
              <p className="font-bold">500 error!</p>
              <p className="font-bold">Server-side error occurred</p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-400 p-6 rounded-lg 
                w-full text-white font-semibold relative
                active:scale-95 drop-shadow-md
                cursor-pointer transition-all duration-100 ease-out"
              onClick={() => router.push("/")}
            >
              Get Back Home!
            </button>
          </div>
        </div>
      </div>
    </div>
  </>;
}
