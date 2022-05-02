import Story from "./Story";
import { useSession } from "next-auth/react";

// faker.js RIP, replaced with hard coded fake_users array above.

const fake_users = [
  {
    username: "Skylar.Schmitt36",
    id: 0,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-1.jpg",
  },
  {
    username: "Helga_Stokes82",
    id: 1,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-2.jpg",
  },
  {
    username: "Bennie_Leuschke8",
    id: 3,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-3.jpg",
  },
  {
    username: "Emmalee.Bogan",
    id: 4,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-4.jpg",
  },
  {
    username: "Monte22",
    id: 5,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-5.jpg",
  },
  {
    username: "Jamel_Kertzmann87",
    id: 7,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-6.jpg",
  },
  {
    username: "Cathrine_Tremblay",
    id: 8,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-7.jpg",
  },
  {
    username: "Winston27",
    id: 9,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-8.jpg",
  },
  {
    username: "Vernie.Rogahn30",
    id: 12,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-9.jpg",
  },
  {
    username: "Bennie_Leuschke8",
    id: 13,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-10.jpg",
  },
  {
    username: "Emmalee.Bogan",
    id: 14,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-11.jpg",
  },
  {
    username: "Monte22",
    id: 15,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-1.jpg",
  },
  {
    username: "Jamel_Kertzmann87",
    id: 16,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-2.jpg",
  },
  {
    username: "Cathrine_Tremblay",
    id: 17,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-3.jpg",
  },
  {
    username: "Winston27",
    id: 18,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-4.jpg",
  },
  {
    username: "Deontae.Rogahn86",
    id: 19,
    avatar:
      "https://raw.githubusercontent.com/MohamedHakem/assets/main/instagramc/ai-face-5.jpg",
  },
];

function Stories() {
  const { data: session } = useSession();

  return (
    <div
      className="flex space-x-1 p-4 pb-6 md:mb-8 px-3 gap-x-2 bg-white md:max-w-2xl m-auto
      md:mt-8 border-gray-200 md:border border-b rounded-sm overflow-x-scroll 
        scrollbar-thin scrollbar-thumb-gray-400 cursor-grabbing"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {fake_users.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
