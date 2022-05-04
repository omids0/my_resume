import React from 'react'

export default function Intrests({myresume}) {
  return (
      <div className="interest-desktop">
      <h3>علاقه‌مندی‌ها</h3>
      <div className="w100 flcltr">
        {myresume.me.intrests.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  )
}
