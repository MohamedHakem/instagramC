import Image from "next/image";

function Story({ img, username }) {
  return (
    <div>
      <div
        className="border-red-500 border-2 rounded-full 
        hover:scale-110 transition transform duration-200 ease-out"
      >
        <div className="relative w-12 h-12 m-[2px]">
          <Image
            // priority
            loading="eager"
            className="rounded-full object-contain cursor-pointer"
            src={img}
            layout="fixed"
            width={48}
            height={48}
            alt={username}
          />
        </div>
      </div>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
