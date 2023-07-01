'use client'
import { VcardBodyContactBlockTypes } from "@/Types/Vcard/VcardBody.type";
import Link from "next/link";
import React from "react";
import {FaPhoneAlt} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {IoIosGlobe} from "react-icons/io"

const VcardBodyContactBlock:React.FC<VcardBodyContactBlockTypes> =({
href,
text,
small,
Icon
})=>{
    return(
        <>
        <div>
            <Link href={href}>
              <div className="row items-center py-2">
                <div className="VcardBody__contactIcon">
                  {Icon && <Icon />}
                </div>
                <div className="VcardBody__contactText">
                  <div>
                    {text}
                    <small className="VcardBody__contactSubText">{small}</small>
                  </div>
                </div>
              </div>
            </Link>
            </div>
        </>
    )
}

const VcardBody: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="VcardBody">
        <div className="VcardBody__innersec">
          {/* Profile details  */}
          <div className="VcardBody__contactDetails">
            <VcardBodyContactBlock 
            Icon={FaPhoneAlt}
            text="8696232306"
            small="Mobile"
            href="tel:+91 8696232306"
            />
            <VcardBodyContactBlock 
            text="7300006186"
            small="Mobile"
            href="tel:+91 7300006186"
            />
          </div>
          <div className="VcardBody__contactDetails">
            <VcardBodyContactBlock 
            Icon={FaEnvelope}
            text="rahulsharmawebdev@gmail.com"
            small="Email"
            href="mailto:rahulsharmawebdev@gmail.com"
            />
            <VcardBodyContactBlock 
            Icon={IoIosGlobe}
            text="boywhocode.xyz"
            small="Website"
            href="/"
            />
          </div>
          {/* Social media */}
          <div className="VcardBody__socialMedia">
            <h5>Social Media</h5>
            <div>
                <ul className="VcardBody__socialMediaLinkGroup">
                    <li className="VcardBody__socialMediaLink">
                        <a
                        href={"https://github.com/boy-whocode"} 
                        target="_blank">
                            <div>
                                <FaGithub className="mx-auto"/>
                            </div>
                        </a>
                    </li>
                    <li className="VcardBody__socialMediaLink VcardBody__socialMediaLink--linkedin">
                        <a
                        href={"https://www.linkedin.com/in/rahul-sharma-1002/"} 
                        target="_blank">
                            <div>
                                <FaLinkedinIn className="mx-auto"/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VcardBody;
