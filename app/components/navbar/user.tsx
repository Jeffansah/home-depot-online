"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";

const User = () => {
  const user = useUser();

  return (
    <>
      {user.isSignedIn === undefined && (
        <div className="flex items-center gap-1">
          <div className="bg-light-100 size-7 animate-pulse rounded-full" />
          <div className="bg-light-100 h-3 w-10 animate-pulse rounded-sm" />
        </div>
      )}
      <SignedIn>
        <div className="flex items-center gap-2">
          <UserButton />
          <p className="text-dark-400 text-xs font-medium tracking-[0.15em] uppercase">
            Hi, {user?.user?.firstName}
          </p>
        </div>
      </SignedIn>
    </>
  );
};

export default User;
