"use client";

import Link from "next/link";
import Image from "next/image";
import "./styles.css";
import GoogleSVG from "../../../public/google.svg";
import FacebookSVG from "../../../public/facebook.svg";

export default function Page() {
  return (
    <div className="container">
      <div className="left-section">
        <h2 className="text-3xl font-bold">MedVault</h2>
        <h4 className="mt-7 text-2xl font-bold">
          Start digitizing your health records <br></br>with us.
        </h4>
      </div>
      <div className="right-section">
        <div className="header">
          <h1>
            Already a member?{" "}
            <Link style={{ color: "blue" }} href="/login">
              Sign in
            </Link>
          </h1>
        </div>
        <h1 className="Sign mb-10 text-3xl font-bold">Sign up to MedVault</h1>
        <div className="third-p mt-5 mb-20">
          <Link
            href="#"
            className="mt-5 flex justify-evenly rounded-md border-2 border-slate-500 p-1 text-center font-bold"
          >
            <Image src={GoogleSVG} className="my-auto h-2 w-2" alt="Google" />
            <span className="mr-2 ml-2">Google</span>
          </Link>
          <Link
            href="#"
            className="mt-5 flex justify-evenly rounded-md border-2 border-slate-500 bg-red-500 p-1 text-center font-bold"
          >
            <Image
              src={FacebookSVG}
              className="my-auto h-2 w-2"
              alt="Facebook"
            />
            <span className="mr-2 ml-2">Facebook</span>
          </Link>
        </div>
        <div className="separator">
          <div className="line"></div>
          <h2>Or</h2>
          <div className="line"></div>
        </div>
        <div className="sign-up-form">
          <form>
            <div className="form text-2xl font-bold">
              <label htmlFor="email">Email: </label>
              <br></br>
              <input
                className="my-1 h-10 rounded-md border-2 border-slate-500 p-1"
                type="text"
                id="email"
                name="email"
              ></input>
            </div>
            <div className="form text-2xl font-bold">
              <label htmlFor="num">Phone Number: </label>
              <br></br>
              <input
                className="my-1 h-10 rounded-md border-2 border-slate-500 p-1"
                type="tel"
                id="num"
                name="num"
              ></input>
            </div>
            <div className="form text-2xl font-bold">
              <label htmlFor="email">Password: </label>
              <br></br>
              <input
                className="my-1 h-10 rounded-md border-2 border-slate-500 p-1"
                type="password"
                id="passw"
                name="passw"
              ></input>
            </div>
            <div className="form text-2xl font-bold">
              <label htmlFor="passw">Retype Password: </label>
              <br></br>
              <input
                className="my-1 h-10 rounded-md border-2 border-slate-500 p-1"
                type="re-passw"
                id="re-passw"
                name="re-passw"
              ></input>
            </div>
            <div className="button">
              <button className="rounded-lg bg-[rgba(255,202,132,255)] py-2 px-3 font-[500]">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
