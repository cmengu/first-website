import React from "react";
//import header from '@/globalData/header.json'
import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <div className=" py-4 px-6 border flex justify-between items-center">
            <div className="relative h-10 w-20">
                {/* <Image src={header.logo.url} fill className ='object-contain' /> */}
            </div>
            {/* <div className="flex gap-2">
                {header.navLinks.map((link) => {
                //     return (
                //         <div key={link.id}>
                //         <Link href= {link.link}>
                //             {link.label}
                //         </Link>
                //     </div>
                // )
                })}
            </div> */}
        </div>
    )
}