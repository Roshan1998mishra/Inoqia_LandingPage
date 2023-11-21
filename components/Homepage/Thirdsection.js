import React from 'react'
import Image from "next/image"
import players from '/assets/players.svg';



const Thirdsection = () => {
  return (
<div>

   <div class="flex fshow">
  <div class="w-1/2 p-4">
    <Image src={players} alt="players" className='playerimg' /> 
  </div>


  <div class="w-1/2 p-4">

     <p className='text-gray-500 font-Outfit text-base font-medium leading-37 tracking-wider uppercase'>Dedication</p>
     <p className='text-gray-800 font-Outfit text-4xl font-semibold leading-62 tracking-tight" w-96 style="letter-spacing: -0.9px;'>Only The Committed <br></br> Players</p>
     <p className='para3 text-gray-700 font-Outfit text-base font-normal pt-7  leading-38 tracking-tighter" style="letter-spacing: -0.4px;'>Inoqia is home for the radically dedicated and uniquely skilled builders in tech. Not just a team, we're your partners to deliver solutions on priority,
         and we're committed to such results that exceed your expectations. Plus upgrading the latest trends every month.</p>
  </div>
  

  </div>

</div>
  )
}

export default Thirdsection


  