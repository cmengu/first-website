import Image from "next/image";
import React from "react";


export default function Slider ({header, body, slides}) {
    return (
        <div className="py-10 px-6">
            slides={
                slides?.map(({ media }, i) => (
                    <div className={classes.slide}>
                        <Image key={i} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/media/${media?.filename}`}
                        alt={media?.alt}
                        />
                    </div>
                ))
            }
        </div>
    )
}