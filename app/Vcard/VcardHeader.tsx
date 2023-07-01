'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react"
import {FaPhoneAlt} from "react-icons/fa"
import {IoMdSend} from "react-icons/io"

const VcardHeader:React.FC=():JSX.Element=>{
    return(
        <>
        <div className="VcardHeader">
          <div className="VcardHeader__inner ">
            {/* logo */}
            <div className="VcardHeader__logo">
              <Image 
              src="/assets/images/logo.png"
              alt="user profile"
              objectFit="contain"
              layout="fill"
              />
            </div>
            {/* name */}
            <div className="VcardHeader__name">
              <h2>Rahul Sharma</h2>
            </div>
            {/* profile */}
            <div className="VcardHeader__profile">
              <h2>Front-end Developer</h2>
              <h4>(React.js)</h4>
            </div>
            {/* contact */}
            <div className="VcardHeader__contacts">
              <div className="VcardHeader__contact">
                <Link href={"tel:+91 8696232306"}>
                  <div className="py-2">
                    <div className="text-xl py-1">
                      <FaPhoneAlt className="mx-auto"/>
                    </div>
                    Call
                  </div>
                </Link>
              </div>
              <div className="VcardHeader__contact">
                <Link href={"mailto:rahulsharmawebdev@gmail.com"}>
                  <div className="py-2">
                  <div className="text-2xl py-1">
                      <IoMdSend className="mx-auto"/>
                    </div>
                    mail
                  </div>
                </Link>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        </>
    )
}

export default VcardHeader;