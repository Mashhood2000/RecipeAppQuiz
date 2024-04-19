import React from 'react';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between'>
      <h1 className ='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className ='text-green-500'>recipes  </span>
        <span className ='text-red-500'>&  </span>
        <span className ='text-yellow-700'>ingredients</span>
      </h1>
      <form>
        <input type = "text" placeholder = "Search..."/>
      </form>
      </div>
    </header>
  );
}
