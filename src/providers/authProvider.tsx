import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import React, { useEffect } from 'react';

type AuthProviderProps = {
  children: React.ReactElement;
};

export function AuthProvider(props: AuthProviderProps) {
  const router = useRouter();
  const session = useSession();


  useEffect(() => {
    checkAuthStatus();
  }, [session.status]);

  async function checkAuthStatus() {
    if (session.status === 'loading') return;

    // @ts-ignore
    const token = session?.data?.accessToken;
    const isLoggedIn = session.status === 'authenticated';

    if (!isLoggedIn) {
      router.replace('/auth');
      return;
    }

    if (isLoggedIn) {
      setCookie(null, "access_token", token);
      router.replace('/dashboard')
    }
  }

  if (session.status === 'loading') {
    return (
      <>Lodaer</>
    );
  }

  return props.children;
}
