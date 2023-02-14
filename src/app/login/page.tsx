'use client'

import { useState } from "react";

function Page(){

    const [count,setCount]=useState(0);

    return (
        <>
           <button onClick={()=>setCount(count+1)}>+</button> 
           {count}
        </>
    )
}

export default Page;