import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent, JSX } from "react";

const Wrapper: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }): JSX.Element => {
  const navLinks = [
    { title: "WÄŊA", href: "/" },
    { title: "DHÄWU", href: "/dhawu/" },
    { title: "FORUM", href: "/forum/" },
    { title: "פרויקטים", href: "/orgs/" },
    { title: "الكود هنا", href: "/code-here/" },
    { title: "МЕРЧ", href: "/merch/" },
    { title: "MU DHEIDHINN", href: "/mu-dheidhinn/" },
    { title: "GDN", href: "/gdn/" },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-gray-100 font-sans px-2 sm:px-12 md:px-32 lg:px-40 xl:px-60">
      <div className="relative w-full flex">
        <Image
          src={"/images/web3cc0fashion.png"}
          layout="responsive"
          objectFit="contain"
          draggable={false}
          width={1824}
          height={1025}
          alt="CC0 Web3 Fashion | Emma-Jane MacKinnon-Lee"
        />
      </div>
      <div className="bg-gradient-to-r from-purple-900 to-black border-b-4 border-purple-700 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center xl:justify-between xl:flex-row flex-col gap-2">
          <h2 className="text-xl 2xl:text-3xl font-bold tracking-wide text-white drop-shadow-md text-center items-center justify-center font-orb sm:flex-row flex-col flex w-fit h-fit relative">
            <span>CC0</span> <span className="text-cyan-400">WEB3 FASHION</span>
          </h2>
          <div className="relative space-x-4 text-xs 2xl:text-sm font-semibold flex flex-row w-fit h-fit flex-wrap text-center items-center justify-center">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative w-fit h-fit flex cursor-pointer text-purple-300 hover:text-white hover:underline underline-offset-4"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {children}
      <div className="text-center text-xs text-gray-500 p-4 border-t border-slate-700">
        <a
          href="https://emmajanemackinnonlee.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:underline underline-offset-4"
        >
          Coined and Archived by Emma-Jane MacKinnon-Lee.
        </a>
      </div>
    </div>
  );
};

export default Wrapper;
