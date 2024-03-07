import React from "react";
import footer from '@/globalData/footer.json'
import Link from "next/link";

export default function Footer () {
    return (
        <div className="py-4 px-6 border flex">
            <div className="flex gap-2">
                {footer.bottomNavLinks.map((link) => {
                    return (
                        <div key={link.id}>
                        <Link href= {link.link}>
                            {link.label}
                        </Link>
                    </div>
                )
                })}
            </div>
        </div>
    )
}