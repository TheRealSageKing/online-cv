import React from "react";
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Info() {
  return (
    <div className="profile">
      <p className="profile--name">Hillary Odinchefu Sylvester</p>
      <p className="profile--role">Software Developer</p>
      <p className="profile--website">hillary.website</p>
      <div className="profile--btngroup">
        <a href="#a" className="btn btn--email">
          <FaEnvelope />
          <span>Email</span>
        </a>
        <a href="#b" className="btn btn--linkedin">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
