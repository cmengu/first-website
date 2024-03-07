
import Image from 'next/image';
import React from 'react'
//use image from next_image as it will automatically optimise the dimensions of the images

export default function Hero ({heading,text, backgroundImage}) {
    return (
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
            <Image src={backgroundImage.url} height={backgroundImage.height} width={backgroundImage.width} alt={backgroundImage.alt} />
        </div>
    );
}