export default function PostSkeleton() {
  return (
    <div
      className="bg-white my-5 border animate-pulse 
      m-auto rounded-lg md:border-2 md:py-0 md:max-w-2xl"
    >
      {/* post header */}
      <div className="flex items-center p-3">
        <div>
          <div className="border bg-gray-300 rounded-full mr-4">
            <div className="relative w-12 h-12 m-[2px]"></div>
          </div>
        </div>
        <div className="flex-1 flex-col space-y-2">
          <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
        </div>
        <div className="w-8 bg-gray-300 h-8 rounded-full"></div>
      </div>
      <div className="block bg-black">
        <div className="border w-[670px] h-[670px] bg-gray-300 mr-4"></div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-3 ">
        <div className="flex space-x-4">
          <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
          <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
          <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
      </div>

      {/* caption */}
      <div className="px-4 py-4 truncate space-y-3">
        <div className="w-32 h-8 bg-gray-300 rounded-full"></div>
      </div>

      {/* input box */}
      <form className="flex items-center px-4 py-4 space-x-4 border-t">
        <div className="w-12 h-8 bg-gray-300 rounded-full"></div>
        <div className="w-full h-9 bg-gray-300 rounded-full"></div>
        <div className="w-20 h-8 bg-gray-300 rounded-full"></div>
      </form>
    </div>
  );
}
