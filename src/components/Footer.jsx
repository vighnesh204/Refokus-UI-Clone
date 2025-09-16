import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto py-10 flex gap-4'>
            <div className='basis-1/2'>
            <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-400 capitalize'>Socials</h4>
                    {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) =><a key={index} className='block mt-2 text-zinc-500 capitalize'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-400 capitalize'>Sitemaps</h4>
                    {["Home", "Work", "Careers", "Contacts"].map((item, index) =><a key={index} className='block mt-2 text-zinc-500 capitalize'>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-right'> Refokus is pioneering digital agency driven by
                            design and empowered by technology.</p>
                    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg" className='w-32 mt-10' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer