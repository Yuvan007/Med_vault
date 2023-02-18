'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import type {ImageLinkData} from '../types/image';

export default function ImageLink(props:ImageLinkData){
    const router = useRouter()

    const handleClick = ()=>{
        void router.push(props.url);
    }
    return(
        <Image src={props.img} onClick={handleClick} className={props.cname} alt={props.alt}/>
    )

}