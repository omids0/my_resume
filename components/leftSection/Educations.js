import React from 'react'

export default function Educations({ myresume }) {
  return (
    <div>
      <h3>تحصیلات</h3>
      <p className='bold'>{myresume.education.degree}</p>
      <p className='gray mys'>{`${myresume.education.location} (${myresume.education.startAt} - ${myresume.education.endAt})`}</p>
    </div>
  )
}
