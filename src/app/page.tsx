"use client";
import { UserType } from "@/util/type";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    fetch("api/user")
      .then((data) => data.json())
      .then((json) => setUser(json.data));
  }, []);
  console.log(user);
  return <div>{user}</div>;
}
