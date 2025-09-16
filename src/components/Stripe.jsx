import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-3 py-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between'>
        <img
         src={val.url}
         alt=""
        />
        <span className='font-semibold'>
            {val.number}
        </span>
    </div>
  )
}

export default Stripe