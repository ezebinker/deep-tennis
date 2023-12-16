import { Metadata } from 'next';
import React from 'react';

export const metadata : Metadata = {
    title: "About Us",
    description: "About Us",
  };

export default function About () {
    return (   
        <div className="mt-20">
            <h1>Deep Tennis</h1>
            <p>Deep Tennis is a platform that allows tennis players to analyze the movements of their favorite players.</p>
        </div>
    )
}