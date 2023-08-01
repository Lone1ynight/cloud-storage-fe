import React from 'react';

type AuthProviderProps = {
  children: React.ReactElement;
  // token: string
};

export const AuthProvider = (props: AuthProviderProps) => {
  // useEffect( () => {
  // //   const token = cookies.get('_token');
  // console.log(props.token)
  //   if(!props.token){
  //     destroyCookie(null, "_token", { path: "/dashboard/auth" });
  //     return;
  //   }
  //
  // }, [props.token]);

  //TODO: need to finish


  return props.children;
}
