'use client';

export default function Login(){
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col bg-white p-6 rounded-3xl">
                <div className="m-5 text-center font-bold text-5xl">Login</div>
                <span className="text-xl font-[400]">Hey,Enter your details to sign into your account</span>
                <form className="flex flex-col">
                    <input className="h-10 p-1 my-2 border-2 rounded-md border-slate-600" placeholder="Enter Email/ Phone No"/>
                    <input className="h-10 p-1 my-1 border-2 rounded-md border-slate-500" placeholder="Password"/>
                    <button className="my-2 py-2 px-3 rounded-lg font-[500] bg-[rgba(255,202,132,255)]">Sign in</button>
                </form>
            </div>
        </div>
    )
}