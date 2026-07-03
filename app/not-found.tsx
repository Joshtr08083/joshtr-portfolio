import React from 'react'
import Link from 'next/link'
import BackButton from './components/Buttons/BackButton'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Page not found | Joshtr",
};

const Page = () => {
  return (
    <>
        <h1
          className="absolute top-0 left-1/2 -translate-x-1/2 mt-18 text-6xl font-bold border-solid border-b-2 pe-10 ps-10 pb-2"
          style={{ textShadow: "20px 20px 5px #00000060" }}
        >
          404 Page Not Found
        </h1>

        <div className="absolute inset-0 flex flex-row items-center justify-center">
          <nav className='flex flex-row gap-10'>
            <BackButton classes="btn-xl shadow-xl/50"/>
            <Link href='/' className='btn btn-outline btn-xl shadow-xl/50'>
              Home
            </Link>
          </nav>
        </div>

        <div className="flex flex-col">
          <div className="pb-96"></div>
          <div className="pb-96"></div>
          <div className="pb-96"></div>
        </div>
    </>
  )
}

export default Page