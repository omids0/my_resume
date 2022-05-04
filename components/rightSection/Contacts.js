import React from 'react'
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

export default function Contacts({myresume}) {
  return (
      <div className="contact-container-desktop">
      <div className="contact-desktop">
        <AiOutlineMail /> <p>{myresume.me.email}</p>
      </div>
      <div className="contact-desktop">
        <AiOutlineCalendar /> <p>{myresume.me.age}</p>
      </div>
      <div className="contact-desktop">
        <MdOutlineLocationOn /> <p className="ltr">{myresume.me.address}</p>
      </div>
      <div className="contact-desktop">
        <AiOutlinePhone /> <p className="ltr">{myresume.me.phone}</p>
      </div>
      <div className="contact-desktop">
        <VscAccount /> <p>{myresume.me.relationship}</p>
      </div>
    </div>
  )
}
