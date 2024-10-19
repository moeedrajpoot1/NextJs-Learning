"use client"
import Link from "next/link"
import React,{useState,useEffect} from 'react'

const Navigations = () => {
  return (
    <nav className="p-3  bg-gradient-to-r from-black via-slate-500 to-indigo-400">
      <div className=" mx-auto  container flex justify-between items-center text-white">
<div>
    Learning Management System
</div>
<div>
    <ul className="flex items-center group">
<li className="mr-5  space-x-4 hover:text-yellow-400">
    <Link href='/'  >Home</Link>
</li>
<li className="mr-5  space-x-4 hover:text-yellow-400">
    <Link href='/screens/courses'  >Courses</Link>
</li>
<li className="mr-5  space-x-4 hover:text-yellow-400">
    <Link href='/screens/instructor'  >Instructors</Link>
</li>
<li className="mr-5  space-x-4 hover:text-yellow-400">
    <Link href='/screens/contactUs'  >Contact Us</Link>
</li>
<li className="mr-5  space-x-4 hover:text-yellow-400">
    <Link href='/home'  >Profile Image</Link>
</li>
    </ul>
</div>
<div className="flex  items-center space-x-2 ">
 <div>Login</div>
 <div>Languages</div>
 <div>Search</div>
</div>


      </div>
    </nav>
  )
}

export default Navigations
