import React from "react";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

export default function Contacts({ myresume }) {
  return (
    <div className="contact-container-desktop">
      <div className="contact-desktop">
        <AiOutlineMail /> <p>{myresume.email}</p>
      </div>
      <div className="contact-desktop">
        <AiOutlineCalendar /> <p>{myresume.age}</p>
      </div>
      <div className="contact-desktop">
        <MdOutlineLocationOn /> <p className="ltr">{myresume.address}</p>
      </div>

      <div className="contact-desktop">
        <div>
          <AiOutlinePhone /> <AiOutlineWhatsApp />
        </div>
        <a href="https://wa.me/+989354403007" target="_blank" rel="noreferrer">
          <p className="ltr">{myresume.phone}</p>
        </a>
      </div>

      <div className="contact-desktop">
        <VscAccount /> <p>{myresume.relationship}</p>
      </div>
    </div>
  );
}
