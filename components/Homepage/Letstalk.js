import React from 'react'
import Image  from 'next/image'
import vector from '/assets/Vector.svg'

const Letstalk = () => {
  return (
    <div>
          <div className='flex mt-5'>
            <div className='w-1/2 p-4 contentsectionlets'>
                <p className='contentsectionlets-head text-[#888888] text-[14px] __className_daeadc tracking-widest'>TRANSPARENT COMMUNICATION</p>
                <p className='text-gray-800 pt-2 font-Outfit text-4xl font-semibold leading-62 tracking-tight" style="letter-spacing: -0.9px;'>Let’s Talk!</p>
                <p className='lets-talk-section-para text-black-400 pt-5 w-full font-Outfit text-base font-normal leading-38 tracking-tighter" style="letter-spacing: -0.4px;'>We believe in clear and open communication. You'll be involved and informed at every stage of the project, 
                    ensuring that your requirements are met accurately.</p>
            </div>


            <div className='w-1/2 p-4'> 
                  <div className='circle-section'>
                     <Image src={vector} alt='vector' className='vectorimg'></Image>
                  </div>

            </div>

          </div>
    </div>
  )
}

export default Letstalk
    