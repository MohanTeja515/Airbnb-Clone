import React from 'react'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessbility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome Clone</p>
            <p>Referals Accepted</p>
            <p>MT World</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>MT Universe</p>
            <p>Presents</p>
            <p>Full Stack</p>
            <p>Hundresds of Projects</p>
            <p>Join Now</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Say Hi YouTube</p>
            <p>Easter Eggs</p>
            <p>For the Win</p>
        </div>
    </footer>
  )
}

export default Footer