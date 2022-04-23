import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/chaitanya-gabbita-3095a3103/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/chaitu713"
        rel="noreferrer noopener"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://app.netlify.com/teams/chaitu713/overview"
        rel="noreferrer noopener"
        target="_blank"
      >
        <SiNetlify />
      </a>
    </div>
  );
};

export default HeaderSocials;
