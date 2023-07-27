import React from "react";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

export default function Contacts({ myresume }) {
  return (
    <div className="contact-container-desktop">
      <div className="contact-desktop">
        <AiOutlineMail /> <span>{myresume.email}</span>
      </div>
      <div className="contact-desktop">
        <AiOutlineCalendar /> <span>{myresume.age}</span>
      </div>
      <div className="contact-desktop">
        <MdOutlineLocationOn /> <span className="ltr">{myresume.address}</span>
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
        <AiOutlineLinkedin />
        <a
          href="https://www.linkedin.com/in/omid-s-8a5239238"
          target="_blank"
          rel="noreferrer"
        >
          <span>{myresume.linkedin}</span>
        </a>
      </div>

      <div className="contact-desktop">
        <VscAccount /> <span>{myresume.relationship}</span>
      </div>
    </div>
  );
}
