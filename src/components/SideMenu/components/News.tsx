import React from 'react'
import { PlayIcon } from '../../../assets/icons/icons'
import girl from '../../../assets/images/girl.png'

const News = () => {
  return (
    <div className='p-3 bg-pageBg rounded-md my-6' >
        <h5 className='text-sm text-blackText mb-2'>New features available!</h5>
        <p className='text-greyText text-sm' >Check out the new dashboard view. Page now load faster.</p>
        <div className='my-4 rounded relative w-full'>
            <img className='rounded-md w-full' src={girl} />
            <div className='absolute bottom-1 left-1 p-3 cursor-pointer'>
                <PlayIcon />
            </div>
        </div>
        <div className='flex'>
            <p className='text-greyText mr-2 text-sm'>Dismiss</p>
            <p className='text-lightPurpleText cursor-pointer text-sm'>What's new?</p>
        </div>
    </div>
  )
}

export default News