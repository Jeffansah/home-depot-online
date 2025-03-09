"use client";

import { UserIcon } from "lucide-react";
import { SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import User from "./user";

const Auth = () => {
  const user = useUser();

  return (
    <>
      <SignedOut>
        <Link href="/sign-in" className="group flex items-center gap-1">
          <UserIcon className="text-dark-400 group-hover:text-dark-50 size-4" />
          <h6 className="group-hover:text-dark-50 text-xs uppercase">Login</h6>
        </Link>
      </SignedOut>
      <User />
    </>
  );
};

export default Auth;
