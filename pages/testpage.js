import Header from "../components/Header";
import Post from "../components/Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import PostSkeleton from "../components/PostSkeleton";

export default function TestPage({ members }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(
  //   () =>
  //     onSnapshot(
  //       query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //       (snapshot) => {
  //         setPosts(snapshot.docs);
  //         setLoading(true);
  //       }
  //     ),
  //   []
  // );

  return (
    <div>
      <Header />
      {loading && <PostSkeleton />}
      {posts.map((post, i) =>
        i == 0 ? (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
            timestamp={post.data().timestamp}
            priority={true}
          />
        ) : (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
            timestamp={post.data().timestamp}
            priority={false}
          />
        )
      )}
    </div>
  );
}
