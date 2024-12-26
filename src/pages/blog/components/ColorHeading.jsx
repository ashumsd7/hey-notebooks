import React from 'react'

function ColorHeading({heading}) {
  const splittedHeading=heading.split(' ')

  return (
    <h2><span className='bg-[#07a3bc] text-white px-1'> {splittedHeading[0]}</span> {splittedHeading.slice(1).join(' ')}</h2>
  )
}

export default ColorHeading