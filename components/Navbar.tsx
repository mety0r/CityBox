import { auth } from "@/auth";
import Link from "next/link";

import Image from "next/image";
import Logout from "./Logout";

const Navbar = async () => {
  const session = await auth();
  return (
    
    <nav className="border-b bg-black/20 backdrop-blur-lg border-zinc-800">
  <div className="flex w-full items-center justify-between px-4 my-4">
    <Link className="text-2xl font-bold text-white tracking-wider" href="/">
      CityBox.<span className="text-blue-400">_</span>
    </Link>
        

        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link href="/sign-in">
              <div className="bg-black-700 text-white text-sm px-4 py-2 rounded-sm">
                Login
              </div>
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}
              </div>
              <Logout />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
