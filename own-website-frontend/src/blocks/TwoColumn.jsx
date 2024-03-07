import Image from 'next/image';
import React from 'react'

export default function TwoColumn ({heading, text, image, direction}) {
    return (
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
            <Image src={image.url} height={image.height} width={image.width} alt={image.alt} />
        </div>
    );
}