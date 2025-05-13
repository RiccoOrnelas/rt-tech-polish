"use client"
import React from 'react'

export default function Supliers({ imgUrl, alt, width, height }) {
    return (
        <div>
            <img
                src={imgUrl}
                alt={alt}
                width={width}
                height={height}
            ></img>
        </div>
    )
} 