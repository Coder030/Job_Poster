"use client";

import { useState } from "react";
import { UserContext } from "../context";

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
