import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const HomePage = () => {
  return (
    <div className="flex">
      <div className="bg-pink-600 w-20 h-40 flex justify-center items-center">
        <Sidebar />
      </div>
      <div className="bg-yellow-800 w-60 h-40 flex justify-center items-center">
        <Content />
      </div>
    </div>




  )
}

export default HomePage