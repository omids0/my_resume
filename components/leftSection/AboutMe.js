import React from 'react'

export default function AboutMe({ myresume }) {
  return (
    <div className='about-me-desktop'>
      <h1>{myresume.me.name}</h1>
      <h2 className='ltr aboutmejob'>{myresume.me.job}</h2>
    </div>
  )
}
