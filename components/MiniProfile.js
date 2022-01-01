import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex grow justify-start">
      <Image
        className="rounded-full w-16 h-16 border p-[2px]"
        src={session?.user?.image}
        alt=""
      />

      <div className="flex-1 mx-3 m-auto ml-4">
        <h2 className="font-bold">{session?.user?.name}</h2>
        <h3 className="text-sm text-gray-400">{session?.user?.username}</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign out
      </button>
    </div>
  );
}

export default MiniProfile;
