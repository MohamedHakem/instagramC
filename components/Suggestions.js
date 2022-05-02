import Image from "next/image";
import { motion } from "framer-motion";

const suggestions = [
  {
    username: "Skylar.Schmitt36",
    id: 0,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-5.jpg",
  },
  {
    username: "Helga_Stokes82",
    id: 1,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-11.jpg",
  },
  {
    username: "Vernie.Rogahn30",
    id: 2,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-4.jpg",
  },
  {
    username: "Bennie_Leuschke8",
    id: 3,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-7.jpg",
  },
  {
    username: "Helga_Stokes82",
    id: 4,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-9.jpg",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2.0,
      staggerChildren: 5.0,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Suggestions() {
  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm mb-3">
        <h3 className="text-sm font-semibold text-gray-400">
          Suggestions for you
        </h3>
        <button className="text-gray-500 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          variants={item}
          className="flex items-center justify-between mt-3"
        >
          <div className="border rounded-full">
            <div className="relative w-[34px] h-[34px] m-[2px]">
              <Image
                className="rounded-full"
                src={profile.avatar}
                layout="fill"
                alt="profile pic"
              />
            </div>
          </div>

          <div className="flex-1 ml-2  object-contain">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">Popular</h3>
          </div>

          <button className="text-xs font-bold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}
