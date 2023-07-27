"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, title: "Anasayfa", url: "/" },
  { id: 2, title: "Hakkimizda", url: "/hakkimizda" },
  { id: 3, title: "iletisim", url: "/iletisim" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          className="cursor-pointer"
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          className="cursor-pointer"
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 flex flex-col gap-8 w-full h-[calc(100vh-6rem)] items-center justify-center text-xl z-10">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          
        </div>
      )}
    </div>
  );
};

export default Menu;
