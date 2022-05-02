import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

// export function reportWebVitals(metric) {
//   if (metric.label === "custom") {
//     console.log(metric);
//   } else {
//     console.log(metric);
//   }
// }
