import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next';
import Title from './components/Title/Title';

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage for Joshtr website -- A site for recording Joshua Reid\'s projects',
};

const Page = () => {
  return (
    <>

      <Title title={"Joshtr"} fromTop={18} bottomLine textShadow/>


      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center">
        <nav className='flex flex-col md:flex-row gap-10'>
          <Link href='/view-projects' className='btn btn-outline btn-xl shadow-xl/50'>
            Projects
          </Link>
          <Link href='/about' className='btn btn-outline btn-xl shadow-xl/50'>
            About
          </Link>
        </nav>
      </div>


    </>
  )
}

export default Page