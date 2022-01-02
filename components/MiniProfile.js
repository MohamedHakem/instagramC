import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex grow relative ">
      <div className="border border-gray-200 rounded-full">
        <div className="relative w-[58px] h-[58px] m-[2px]">
          <Image
            className="rounded-full"
            src={session?.user?.image}
            layout="fill"
            alt="profile pic"
          />
        </div>
      </div>
      <div className="flex-1 mx-3 m-auto ml-4">
        <h2 className="font-bold text-gray-700">{session?.user?.name}</h2>
        <h3 className="text-sm text-gray-400">{session?.user?.username}</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign out
      </button>
    </div>
  );
}

export default MiniProfile;
