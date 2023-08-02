import "@/styles/globals.css";
import { AuthProvider } from '@/providers/authProvider';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from "next/app";
import React from "react";

interface Props extends AppProps {
  Component: AppProps["Component"] & {
    getLayout: (page: React.ReactElement) => React.ReactNode;
  };
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <SessionProvider>
      <AuthProvider>
        <>
          {
            getLayout(<Component {...pageProps} />)
          }
        </>
      </AuthProvider>
    </SessionProvider>
  )
}