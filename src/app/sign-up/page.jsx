'use client';

import Link from "next/link";
import Image from "next/image";
import './styles.css'
import GoogleSVG from '../../../public/google.svg'
import FacebookSVG from '../../../public/facebook.svg'

export default function Page() {
    return (
        <div className="container">
            <div className="left-section">
                <h2 className="font-bold text-3xl">MedVault</h2>
                <h4 className="mt-7 font-bold text-2xl">Start digitizing your health records <br></br>with us.</h4>
            </div>
            <div className="right-section">
                <div className="header">
                    <h1>Already a member? <Link style={{ color: "blue" }} href="/login">Sign in</Link></h1>
                </div>
                <h1 className="Sign mb-10 font-bold text-3xl">Sign up to MedVault</h1>
                <div className="third-p mt-5 mb-20">
                    <Link href="#" className="mt-5 flex justify-evenly p-1 text-center border-2 border-slate-500 rounded-md font-bold"><Image src={GoogleSVG} className="my-auto w-5 h-5" alt="Google" /><span className="mr-2 ml-2">Google</span></Link>
                    <Link href="#" className="mt-5 flex justify-evenly p-1 text-center border-2 border-slate-500 rounded-md font-bold"><Image src={FacebookSVG} className="my-auto w-5 h-5" alt="Facebook" /><span className="mr-2 ml-2">Facebook</span></Link>
                </div>
                <div className="separator">
                    <div className="line"></div>
                    <h2>Or</h2>
                    <div className="line"></div>
                </div>
                <div className="sign-up-form">
                    <form>
                        <div className="form font-bold text-2xl">
                            <label htmlFor="fname">First name: </label><br></br>
                            <input className="h-10 p-1 my-1 border-2 rounded-md border-slate-500" type="text" id="fname" name="fname"></input>
                        </div>
                        <div className="form font-bold text-2xl">
                            <label htmlFor="usern">Username: </label><br></br>
                            <input className="h-10 p-1 my-1 border-2 rounded-md border-slate-500" type="text" id="usern" name="usern"></input>
                        </div>
                        <div className="form font-bold text-2xl">
                            <label htmlFor="email">Email: </label><br></br>
                            <input className="h-10 p-1 my-1 border-2 rounded-md border-slate-500" type="email" id="email" name="email"></input>
                        </div>
                        <div className="form font-bold text-2xl">
                            <label htmlFor="passw">Password: </label><br></br>
                            <input className="h-10 p-1 my-1 border-2 rounded-md border-slate-500" type="password" id="passw" name="passw"></input>
                        </div>
                        <div className="button">
                            <button className="py-2 px-3 rounded-lg font-[500] bg-[rgba(255,202,132,255)]">Create Account</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}