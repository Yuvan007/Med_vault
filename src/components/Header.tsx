import Link from "next/link"
import Home from '../../public/home.svg';
import Image from "next/image";
import type { StaticImageData } from "next/image";

export default function Header(){
    return (
        <div className="flex p-4">
            <span className="mx-4  text-4xl font-bold">Medvault</span>
            <span className="flex-1"></span> 
            <span className="mx-4 flex object-contain"><Image src={(Home as StaticImageData)} className="w-5 h-5 my-auto cursor-pointer" alt="Home Button"/></span>
            <Link href='#' className="mx-4 py-2 px-3 rounded-lg font-[500] bg-[rgba(255,202,132,255)]">Sign up</Link>
        </div>
    )
}