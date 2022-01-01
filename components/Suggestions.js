import Image from "next/image";

const suggestions = [
  {
    username: "Skylar.Schmitt36",
    id: 0,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/InstaFrame/main/AI-fake-faces/photo-by-face-generator_61b27e87b15cc4000ef94cde.jpg",
  },
  {
    username: "Helga_Stokes82",
    id: 1,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/InstaFrame/main/AI-fake-faces/photo-by-face-generator_61b27f00b15cc4000d99f432.jpg",
  },
  {
    username: "Vernie.Rogahn30",
    id: 2,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/InstaFrame/main/AI-fake-faces/photo-by-face-generator_61b27f722c575f000dc6b85d.jpg",
  },
  {
    username: "Bennie_Leuschke8",
    id: 3,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/InstaFrame/main/AI-fake-faces/photo-by-face-generator_61b27fdcb15cc4000d99f458.jpg",
  },
  {
    username: "Helga_Stokes82",
    id: 4,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/InstaFrame/main/AI-fake-faces/photo-by-face-generator_61b27f00b15cc4000d99f432.jpg",
  },
];

function Suggestions() {
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
          className="flex items-center justify-between mt-3"
        >
          <Image
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt=""
          />

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

export default Suggestions;
