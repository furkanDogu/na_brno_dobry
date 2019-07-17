import React from "react";
export type TUserData = {
  id: string;
  email: string;
  role: string;
};

export const UserContext = React.createContext<TUserData | null>(null);

export default UserContext.Provider;
