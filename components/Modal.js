import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

export default function Modal() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const captionRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    // 1) Create a post and add it to firestore
    // 2) Get the post ID for the newly created post };
    // 3) Upload the image to firebase storage
    // 4) get a download URL from firebase storage and update the original post with image

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log("New Doc Added with ID", docRef.id);

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );

    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-11 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center min-h-[800px]
          sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className="fixed inset-0 bg-gray-500 
            bg-opacity-75 transition-opacity"
            />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. This is from tailwind! */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-9 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg 
              w-5/6 pt-4 pb-10 text-left overflow-hidden shadow-xl transform
              transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:pb-10 sm:pt-4"
            >
              <div>
                <div className="pb-4 text-center font-semibold">
                  Create new post
                </div>
                <hr />

                {selectedFile ? (
                  <img
                    className="w-full object-contain cursor-pointer"
                    onClick={() => setSelectedFile(null)}
                    src={selectedFile}
                    alt=""
                  />
                ) : (
                  <div className="pt-6 pb-2">
                    <div
                      onClick={() => filePickerRef.current.click()}
                      className="mx-auto flex items-center 
                  justify-center h-20 w-20 rounded-full 
                  bg-red-100 cursor-pointer"
                    >
                      <div className="h-12 w-12">
                        <CameraIcon
                          className="text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-center mt-2 sm:mt-2">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 front-medium text-gray-900"
                    >
                      Upload a photo
                    </Dialog.Title>
                  </div>
                  <div className=" mt-7 ">
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>

                  <div className="mt-2">
                    <input
                      className="border-none focus:ring-0 w-full text-center"
                      type="text"
                      ref={captionRef}
                      placeholder="Write a caption..."
                    />
                  </div>
                </div>
                <div className="mx-10">
                  <div className="mt-5 sm:mt-6 mx-auto">
                    <button
                      type="button"
                      disabled={!selectedFile}
                      onClick={uploadPost}
                      className="inline-flex justify-center w-full relative rounded-md 
                border border-transparent shadow-sm px-4 py-3 bg-blue-400
                text-base font-medium text-white hover:bg-red-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-red-500 sm:text-sm disabled:bg-gray-300
              disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                    >
                      {loading ? "Posting..." : "Post"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
