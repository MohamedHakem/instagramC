import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Image from "next/image";

// On browser,
function signin({ providers }) {
  return (
    <div className="flex flex-grow justify-center align-middle min-h-screen h-full w-full bg-[#fbfbfb]">
      <div className="max-w-4xl m-auto flex">
        <div
          className="hidden lg:flex flex-col items-center mr-0
      justify-center py-2 pl-14 text-center"
        >
          <Image
            src="https://raw.githubusercontent.com/MohamedHakem/InstaFrame/main/AI-fake-faces/insta-hm-bg.JPG"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center py-2 px-6 mx-6 lg:pr-14 lg:pl-6 text-center max-w-md">
          <div className="bg-white items-center border border-gray-200 p-10 flex flex-col justify-center">
            <Image
              className="w-80"
              src="https://links.papareact.com/ocw"
              alt=""
            />
            <p className="font-xs italic mt-4">
              This is an Instagram clone app built for educational purposes
              only.
            </p>
            <div className="mt-14 mb-6">
              {Object.values(providers).map((provider) => (
                <div className="" key={provider.name}>
                  <button
                    className="bg-blue-500 flex-auto inline-flex relative active:scale-95 drop-shadow-md
                cursor-pointer transition-all duration-100 ease-out text-white
                h-auto w-auto px-6 py-[10px] font-medium hover:bg-blue-400 rounded-[5px]"
                    onClick={() =>
                      SignIntoProvider(provider.id, { callbackUrl: "/" })
                    }
                  >
                    Log in with {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// On server
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
