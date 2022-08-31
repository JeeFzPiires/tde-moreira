import React from 'react'
import SocialIcons, { Icons } from './SocialIcons'


export default function Footer() {
  return(
    <footer className='bg-slate-900 text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
        text-center pt-5 text-white text-sm pb-8'>
          <span>Terms · Privacy Policy</span>
          <span>©JSP. All rights reserved.</span>
          <SocialIcons Icons={Icons}/>
      </div>
    </footer>
  )
}