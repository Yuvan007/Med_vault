'use client';

import Link from "next/link";
import Image from "next/image";

import GoogleSVG from '../../public/google.svg'
import FacebookSVG from '../../public/facebook.svg'

export default function Login(){
    return (
        <div className="flex flex-col justify-center">
            <div className="p-11 flex flex-col bg-white rounded-3xl align-middle drop-shadow-2xl">
                <div className="m-4 text-center font-bold text-4xl">Login</div>
                <span className="p-2 mb-4 mx-auto max-w-[70%] text-md font-[400] text-center">Hey, Enter your details to sign in  to your account</span>
                <form className="flex flex-col">
                    <input className="h-10 p-1 my-2 border-2 rounded-md border-slate-600" name="phone_email" placeholder="Enter Email/ Phone No"/>
                    <input className="h-10 p-1 my-1 border-2 rounded-md border-slate-500" name="password" placeholder="Password"/>
                    <Link href='/recover' className="my-3 text-sm font-bold" >Having trouble in sign in?</Link>
                    <button className="my-2 py-2 px-3 rounded-lg font-[500] bg-[rgba(255,202,132,255)]">Sign in</button>
                </form>
                <div className="mt-5 mb-2 text-center font-bold text-xs">-- Or Sign in with --</div>
                <div className="m-3 flex justify-evenly">
                    <Link href="#" className="flex justify-evenly p-1 text-center w-[30%] border-2 border-slate-500 rounded-md font-bold"><Image src={GoogleSVG} className="my-auto w-5 h-5" alt="Google"/><span className="mr-2">Google</span></Link>
                    <Link href="#" className="flex justify-evenly p-1 text-center w-[30%] border-2 border-slate-500 rounded-md font-bold"><Image src={FacebookSVG} className="mr-1 my-auto w-5 h-5" />Facebook</Link>
                </div>
                <div className="m-2 text-center text-xs">Don&apos;t have an account?<Link href='/signup' className="font-bold">Register Now</Link></div>
            </div>
        </div>
    )
}