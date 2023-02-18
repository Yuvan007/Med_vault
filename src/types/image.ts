import type { StaticImageData } from "next/image";

export interface ImageLinkData{
    img:StaticImageData,
    url:string,
    cname:string,
    alt:string
}