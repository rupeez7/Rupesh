import React from 'react'
import yoga from "../../../assests/animation.json";
import { useLottie } from 'lottie-react';


const DisplaySection = () => {
  const { View } = useLottie({
    animationData: yoga,
    loop: true,
  });
  return (
    <div className='grid grid-cols-2 sm:grid-cols-1 items-center bg-black text-white py-5'>
      <div className="animation" style={{ width: '600px', height: '500px', overflow: 'hidden' }}>

        {View}
        {/* <lottie-player src="https://lottie.host/df43ba85-fea7-4f98-9a30-708bcca0f8e3/qJOMJXYV6x.json" background="##FFFFFF" speed="1" loop autoplay mode="normal" style={{ height: '400px' }}  ></lottie-player> */}

      </div>

      <div className="disInfo sm:text-center ">
        <h1 className='text-red-600'>Hi, I am Rupesh Shrestha</h1>
        <p>React Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt accusamus adipisci. Sequi nemo quam nulla et repellat necessitatibus natus. Placeat laboriosam ipsa, doloribus veniam dolores nulla eveniet quae illum?</p>
      </div>


    </div>
  )
}

export default DisplaySection