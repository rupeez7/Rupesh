import React from 'react'
import { DiAndroid, DiCss3, DiGit, DiHtml5, DiJavascript, DiPhp, DiPython, DiReact } from "react-icons/di";

const Tech = () => {
  return (
    <div className='my-7 grid grid-cols-autoFit place-items-center gap-y-7'>
      <DiAndroid className="hover:scale-125 cursor-pointer hover:text-amber-900" size={125} />
      <DiReact className="hover:scale-125 cursor-pointer hover:text-amber-900" size={125} />
      <DiPython className="hover:scale-125 cursor-pointer hover:text-amber-900" size={125} />
      <DiHtml5 className="hover:scale-125 cursor-pointer hover:text-amber-900" size={125} />
      <DiCss3 className="hover:scale-125 cursor-pointer hover:text-amber-900" size={125} />
      <DiJavascript className="hover:scale-125 cursor-pointer hover:text-amber-900" size={125} />
      <DiGit className="hover:scale-125 cursor-pointer hover:text-amber-900" size={125} />
      <DiPhp className="hover:scale-125 cursor-pointer hover:text-amber-900" size={125} />



    </div>

  )
}

export default Tech