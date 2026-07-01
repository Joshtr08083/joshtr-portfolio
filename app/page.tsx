import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage for Joshtr website -- A site for recording Joshua Reid\'s projects',
};

const Page = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <h1
          className="absolute top-0 left-1/2 -translate-x-1/2 mt-18 text-6xl font-bold border-solid border-b-2 pe-10 ps-10 pb-2"
          style={{ textShadow: "20px 20px 5px #00000060" }}
        >
          JOSHTR
        </h1>

        <div className="absolute inset-0 flex flex-row items-center justify-center">
          <nav className='flex flex-row gap-10'>
            <Link href='/view-projects' className='btn btn-outline btn-xl shadow-xl/50'>
              Projects
            </Link>
            <Link href='/' className='btn btn-outline btn-xl shadow-xl/50'>
              About
            </Link>
          </nav>
        </div>

      </div>
    </>
  )
}

export default Page