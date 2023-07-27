import React from "react";
import { RiInformationFill, RiTimeFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { MdEmail, MdLocalPhone } from "react-icons/md";

const contact = () => {
  return (
    <>
      <div className="bg-white mx-auto px-2 sm:px-20">
        <div className="pt-8 text-center text-2xl text-slate-600 ">
        Herhangi bir bilgi talebi için bizimle iletişime geçmekten çekinmeyin.
        </div>
        <div className="flex mt-8 h-24 items-center justify-center">
          <div className="border-t-2 w-[500px]" />
          <div className="px-4">
            <RiInformationFill className="w-12 h-12 text-red-500" />
          </div>
          <div className="border-t-2 w-[500px]" />
        </div>
        <div className="uppercase font-bold text-slate-600 text-3xl text-center mt-4">
          Ilesim bilgileri
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-between mt-12 mb-4">
          <div className="items-center text-center">
            <TiLocation className="w-12 h-12 text-red-500 mx-auto" />
            <div className="text-xl font-bold text-slate-600 mt-4 hover:text-red-500 hover:font-bold">
              Adres
            </div>
            <div className="text-slate-600 mt-4 hover:text-red-500 hover:font-bold uppercase">
            abdulbakigölpınarlı cad. Lalezar Sk. No:3/1 <br /> 34692 <br />
              Üsküdar/İstanbul
            </div>
          </div>
          <div className="items-center text-center">
            <MdLocalPhone className="w-12 h-12 text-red-500 mx-auto" />
            <div className="text-xl font-bold text-slate-600 mt-4 hover:text-red-500 hover:font-bold">
              Telefon
            </div>
            <div className="text-slate-600 mt-4 hover:text-red-500 hover:font-bold">
              0505 070 29 28
            </div>
          </div>
          <div className="items-center text-center">
            <MdEmail className="w-12 h-12 text-red-500 mx-auto" />
            <div className="text-xl font-bold text-slate-600 mt-4 hover:text-red-500 hover:font-bold">
              E-Mail
            </div>
            <div className="text-slate-600 mt-4 hover:text-red-500 hover:font-bold">
              tosuntasimacilik@gmail.com
            </div>
          </div>
          <div className="items-center text-center">
            <RiTimeFill className="w-12 h-12 text-red-500 mx-auto" />
            <div className="text-xl font-bold text-slate-600 mt-4 hover:text-red-500 hover:font-bold">
              Calisma Saatleri
            </div>
            <div className="text-slate-600 mt-4 hover:text-red-500 hover:font-bold mb-4">
              7/24</div>
          </div>
        </div>
       
       
       
      </div>
    </>
  );
};

export default contact;