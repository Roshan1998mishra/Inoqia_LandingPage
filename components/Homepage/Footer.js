import React from 'react'
import Image from 'next/image'
import logo from '/assets/logo.svg'
import facebook from '/assets/facebook.svg'
import twitter from '/assets/twitter.svg'
import youtube from'/assets/youtube.svg'
import instagram from '/assets/instagram.svg'


const Footer = () => {
  return (
    <div>
           

<footer class="bg-black  shadow dark:bg-gray-900  pt-20">

<div class="w-full max-w-screen-xl mx-auto py-12">
        <div class="first-footer-line sm:flex sm:items-center sm:justify-between">
            <Image src={logo} alt='logo' className='footer-logo'></Image>
            <p className='text-white footer-para'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo similique 
            sunt in culpa qui officia deserunt mollitia animi, 
            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita.
            </p>
            
</div>


<div className='flex ' >
<div className='w-1/2 mt-10'>
            <div>
            <h4 className='help-text-footer text-white'>Need Any Help ?</h4>
            </div>

            <div className='flex footer-help'>

            <div className='call-section-footer'>
            <p className='small-text-footer text-white'>Call 24/7 For Any Help</p>
            <p className='text-white'><a href='tel:1860 233 1407'>1860 233 1407</a></p>
            
            </div>
          
            <div className='call-section-footer'>
              <p className='small-text-footer text-white'>For Any Query or Feedback</p>
              <p className='text-white'><a href='mailto:Contactus@inoqia.com'>Contactus@inoqia.com</a></p>
            </div>

        </div>

         <br></br>

        <div className='icon-section-footer mt-10'>
          <p className='pl-2 text-white font-semibold'>Follow Us On</p>
          <div className='icons-footer flex'>
            <Image src={facebook} alt='facebook'></Image>
            <Image src={twitter} alt='twitter'></Image>
            <Image src={instagram} alt='instagram'></Image>
            <Image src={youtube} alt='youtube'></Image>
        </div>
        </div> 
        </div>


{/*--------------------------------------------------------Menu sectio-----------------------------------------------------------*/}

<div className='w-1/2 mt-10'>
    <div className='flex footer-menu-section'>
    <div className='footer-menu'>
    <p><a className='text-white'  href='#'>About</a></p>
    <p><a className='text-white'  href='#'>Services</a></p>
    <p><a className='text-white'  href='#'>Industry</a></p>
    <p><a className='text-white'  href='#'>Our Work</a></p>
    <p><a className='text-white'  href='#'>Hire</a></p>
    <p><a className='text-white'  href='#'>Blogs</a></p>
    <p><a className='text-white'  href='#'>Contact</a></p>
  </div>

  <div className='footer-menu'>
    <p><a className='text-white'  href='#'>Sitemap</a></p>
    <p><a className='text-white'  href='#'>Careers</a></p>
    <p><a className='text-white'  href='#'>Travel Agents</a></p>
    <p><a className='text-white'  href='#'>FAQs</a></p>
    <p><a className='text-white'  href='#'>Carriage of Pets</a></p>

  </div>
</div>
</div>

{/*-------------------------------------------------------End Menu Section--------------------------------------------------------*/}

</div>
</div>

<div className='copyright-section'>
  <p className='text-white font-extralight '>© Copyright 2023, All Rights Reserved with inoqia.com - Web & Mobile App Development Division of inoqia.</p>

</div>

</footer>

</div>
  )
}

export default Footer
     