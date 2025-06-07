import {Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedOut } from "@clerk/clerk-react"; // or wherever it's fro
import { SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/clerk-react"; // or wherever it's from
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="py-4  flex justify-between items-center">
         <Link>
         <img src="/logo.png" className="h-28" />
        </Link>   

       <Button variant="outline">Log</Button>

        {/* <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
