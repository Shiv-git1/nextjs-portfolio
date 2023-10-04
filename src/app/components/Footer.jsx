import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Link
            href={"/"}
            className="text-xl bg-white p-2 flex items-center gap-2 md:text-xl text-slate-500 font-semibold"
          >
            <span>Powered by:</span>
            <Image
              src="/images/nextjs-icon.png"
              // className="bg-primary-500"
              // style={{ borderRadius: 30 }}
              height={60}
              width={60}
              alt="logo"
            />
          </Link>
        </span>
        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
