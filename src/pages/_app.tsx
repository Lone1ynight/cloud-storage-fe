import "@/styles/globals.css";
import { AuthProvider } from '@/providers/authProvider';
import type { AppProps } from "next/app";
import React from "react";

interface Props extends AppProps {
  Component: AppProps["Component"] & {
    getLayout: (page: React.ReactElement) => React.ReactNode;
  };
}

// type PageWithLayout = NextPage & {
//   isPublicPage?: boolean;
// };
//
// type AppPropsWithLayout = AppProps & {
//   Component: PageWithLayout;
// };

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    // <SessionProvider session={pageProps.session}>
      <AuthProvider>
        <>
          {
            getLayout(<Component {...pageProps} />)
          }
        </>
      </AuthProvider>
    // </SessionProvider>
  )
}