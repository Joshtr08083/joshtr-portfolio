'use client';
import React from 'react';
import { useRouter } from 'next/navigation' 
import { getPreviouslyCachedImageOrNull } from 'next/dist/server/image-optimizer';

interface Props {
  classes?: string;
}

const BackButton = ( { classes = "" } : Props) => {
  const router = useRouter();

  return (
    <button 
        onClick = {() => {router.back()}}
        className = {`btn btn-outline shadow-xl/50 ${classes}`}
    >
        Back
    </button>

  )
}

export default BackButton