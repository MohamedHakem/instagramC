import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";
import Image from "next/image";
import { motion } from "framer-motion";

function Post({
  id,
  username,
  userImg,
  img,
  caption,
  timestamp,
  priority,
  postId,
}) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  // const wh = "100%";

  // on reload, set all the comments from firestore
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts", id, "comments"), orderBy("timestamp")),
        (snapshot) => setComments(snapshot.docs)
      ),
    [id]
  );

  // on reload, set all the likes from firestore
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [id]
  );

  // on reload, set hasLiked for all the posts
  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes, session?.user?.uid]
  );

  // on like button onClick, add the uid to the liked list on firestore for this post
  // or, remove the uid from the liked list on firestore for this post
  //on wether the user liked or disliked
  const liked = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  // go ahead and add a comment section on my firestore for this post
  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.05,
          },
        },
      }}
    >
      <div className="bg-white my-5 border-t border-b md:border md:py-0 md:max-w-2xl m-auto rounded-sm">
        {/* post header */}
        <div className="flex items-center p-3">
          <div>
            <div className="border rounded-full mr-2">
              <div className="relative w-12 h-12 m-[2px]">
                <Image
                  loading="eager"
                  className="rounded-full object-contain"
                  src={userImg}
                  layout="fixed"
                  width={48}
                  height={48}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="flex-1 font-bold text-gray-700">{username}</p>
            <Moment fromNow className="text-xs">
              {timestamp?.toDate()}
            </Moment>
          </div>
          <DotsHorizontalIcon className="h-5 cursor-pointer" />
        </div>

        <div className="block bg-black">
          {/* <Image
          className="bg-black"
          layout="responsive"
          objectFit="contain"
          priority={priority}
          loading="eager"
          height={wh}
          width={wh}
          src={img}
          alt=""
        /> */}
          <Image
            className="bg-black"
            layout="responsive"
            objectFit="contain"
            priority={priority}
            // loading="eager"
            height={768}
            width={768}
            src={img}
            alt=""
          />
        </div>
        {/* <img src={img} loading="lazy" className="object-cover w-full" alt="" /> */}

        {/* Buttons */}
        {session && (
          <div className="flex justify-between px-4 pt-3 ">
            <div className="flex space-x-4">
              {hasLiked ? (
                <HeartIconFilled
                  onClick={liked}
                  className="btn text-red-500  hover:animate-bounce"
                />
              ) : (
                <HeartIcon onClick={liked} className="btn animate-bounce" />
              )}
              <ChatIcon className="btn" />
              <PaperAirplaneIcon className="btn rotate-45" />
            </div>
            <BookmarkIcon className="btn" />
          </div>
        )}

        {/* caption */}
        <p className="p-5 truncate">
          {likes.length > 0 && (
            <span className="block font-semibold mb-2 -mt-2">
              {likes.length} likes
            </span>
          )}
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>

        {/* comments */}
        {comments.length > 0 && (
          <div className="ml-8 h-18 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center space-x-2 mb-3"
              >
                <div className="relative w-7 h-7">
                  <Image
                    className="rounded-full"
                    src={comment.data().userImage}
                    layout="fill"
                    alt="profile pic"
                  />
                </div>
                <p className="text-sm flex-1">
                  <span className="font-bold"> {comment.data().username}</span>
                  <span className="ml-2">{comment.data().comment}</span>
                </p>
                <Moment
                  fromNow
                  className="pr-5 text-xs text-gray-500 text-clip"
                >
                  {comment.data().timestamp?.toDate()}
                </Moment>
              </div>
            ))}
          </div>
        )}

        {/* new comment box */}
        {session && (
          <form className="flex items-center px-4 py-2 border-t">
            <EmojiHappyIcon className="h-7" />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add A comment..."
              className="border-none flex-1 focus:ring-0 outline-none"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              onClick={sendComment}
              className="font-semibold text-blue-400"
            >
              Post
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export default Post;
