import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Login from "../components/Login";
import { getSession, useSession, getProviders } from "next-auth/react";

export default function Home({ providers }) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Instagram Retouch by Hakem</title>
        <meta name="description" content="Instagram clone by Hakem" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://firebasestorage.googleapis.com"
          crossOrigin="true"
        />
        <link
          rel="preconnect"
          href="https://raw.githubusercontent.com"
          crossOrigin="true"
        />
        <link
          rel="dns-prefetch"
          href="https://firebasestorage.googleapis.com"
        />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <link rel="dns-prefetch" href="lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="avatars.githubusercontent.com" />
        <link rel="dns-prefetch" href="platform-lookaside.fbsbx.com" />
      </Head>
      <div className="bg-back_bg h-screen overflow-y-auto">
        {!session ? (
          <Login providers={providers} />
        ) : (
          <>
            <Header />
            <Feed />
            <Modal />
          </>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      //Why: To check if the user logged-in or not
      session: await getSession(context),
      //Why: To pass it to <Login /> for not-logged-in users
      providers: await getProviders(),
    },
  };
}
