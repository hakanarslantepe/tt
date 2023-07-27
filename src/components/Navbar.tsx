import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  const user = true;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="md:flex hidden gap-x-4 flex-1">
        <Link href="/">Anasayfa</Link>
      </div>
      <div className="text-xl md:font-bold md:text-center flex-1">
        <Link href="/">Tosun Tasimacilik</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>0505 070 29 28</span>
        </div>
        <Link href="/iletisim">Iletisim</Link>
        <Link href="/hakkimizda">Hakkimizda</Link>
      </div>
    </div>
  );
};

export default Navbar;
