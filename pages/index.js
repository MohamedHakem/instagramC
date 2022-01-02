import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Login from "../components/Login";
import { getSession, useSession, getProviders } from "next-auth/react";

export default function Home({ providers }) {
  const { data: session } = useSession();

  return (
    <div className="bg-back_bg h-screen overflow-y-auto">
      <Head>
        <title>Instagram clone by Hakem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
