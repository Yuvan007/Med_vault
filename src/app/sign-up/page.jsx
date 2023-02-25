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
                <h1 className="Sign font-bold text-3xl">Sign up to MedVault</h1>
                <div className="third-p mt-5 mb-8">
                    <Link href="#" className="mt-5 flex justify-evenly p-1 text-center border-2 border-slate-500 rounded-md font-bold"><Image src={GoogleSVG} className="my-auto w-5 h-5" alt="Google" /><span className="mr-2 ml-2">Google</span></Link>
                    <Link href="#" className="mt-5 flex justify-evenly p-1 text-center border-2 border-slate-500 rounded-md font-bold"><Image src={FacebookSVG} className="my-auto w-5 h-5" alt="Facebook" /><span className="mr-2 ml-2">Facebook</span></Link>
                </div>
                <div className="separator">
                    <div className="line"></div>
                    <h2>Or</h2>
                    <div className="line"></div>
                </div>
                <div className="sign-form">
                    <form action="#" method="GET">
                        <div className="first">
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" required={true} />
                            <label htmlFor="usern">Username: </label>
                            <input type="text" name="usern" required={true} />
                        </div>
                        <div>
                            <label htmlFor="pass">Password: </label>
                            <input type="password" name="pass" required={true} />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" required={true} />
                        </div>
                        <button>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}