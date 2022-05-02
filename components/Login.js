import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// On browser,
export default function Login({ providers }) {
  const [loading, setLoading] = useState(false);

  const onClickLogin = (providerID) => {
    signIn(providerID, { callbackUrl: "/" });
    setLoading(true);
  };

  return (
    <div
      className={`flex justify-center min-h-screen h-full 
      bg-[#fafafa]
    opacity-${loading ? 60 : 100}`}
    >
      <div className="flex max-w-4xl m-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.4,
              opacity: 0,
            },
            visible: {
              scale: [0.5, 1],
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            },
          }}
        >
          <div
            className="hidden lg:flex lg:relative flex-col  
            items-center mr-0 justify-center py-2 pl-14 text-center"
          >
            <div className="relative w-[342px] h-[502px]">
              <Image
                layout="responsive"
                objectFit="contain"
                priority
                loading="eager"
                width={342}
                height={502}
                src="https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/insta-hm-bg.jpg"
                alt=""
              />
            </div>
          </div>
        </motion.div>

        <div
          className={`flex flex-col items-center justify-center py-2 px-6
              lg:pr-14 lg:pl-6 text-center max-w-md  opacity-${
                loading ? 60 : 100
              }`}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.4,
                opacity: 0,
              },
              visible: {
                scale: [0.5, 1],
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}
          >
            <div
              className="bg-white items-center border border-gray-300 
            rounded-3xl px-10 pt-4 pb-2 flex flex-col drop-shadow-sm"
            >
              <div className="w-[70%]">
                <Image
                  className="relative"
                  layout="responsive"
                  objectFit="contain"
                  priority
                  loading="eager"
                  width={384}
                  height={137}
                  src="https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/2880px-Instagram_logo.png"
                  alt=""
                />
              </div>
              <p className="font-xs italic mt-3">
                This is an Instagram clone app.
              </p>
              <div className="mt-8 mb-6 mx-4 w-full">
                {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button
                      className={`bg-white flex-auto items-center m-auto inline-flex relative active:scale-95 
                    drop-shadow-sm cursor-pointer transition-all duration-100 ease-out my-2 w-full text-black
                    h-auto px-6 py-[10px] font-medium hover:bg-gray-100 border animate 
                    border-gray-300 rounded-xl justify-center focus:bg-gray-100 animate-${
                      loading ? "ping" : 100
                    }`}
                      onClick={() => onClickLogin(provider.id)}
                    >
                      {provider.name == "Google" ? (
                        <svg
                          width="24"
                          height="24"
                          className="mr-2 align-middle h-[100%]"
                        >
                          <g>
                            <path
                              d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                              fill="#4285F4"
                            ></path>
                            <path
                              d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                              fill="#FBBC05"
                            ></path>
                            <path
                              d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                              fill="#EA4335"
                            ></path>
                          </g>
                        </svg>
                      ) : provider.name == "Facebook" ? (
                        <svg
                          className="fill-[#3b5998] align-middle mr-2"
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      ) : provider.name == "GitHub" ? (
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      ) : null}
                      Continue with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
