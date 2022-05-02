import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";
import { motion } from "framer-motion";

export default function Posts({ session }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
          setLoading(false);
        }
      ),
    []
  );

  return (
    <div>
      {loading && (
        <motion.div
          initial="visible"
          animate="hidden"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
        >
          <PostSkeleton />
        </motion.div>
      )}
      {posts.map((post, index) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
          timestamp={post.data().timestamp}
          priority={index == 0 ? true : false}
          postId={post.id}
        />
      ))}
    </div>
  );
}
