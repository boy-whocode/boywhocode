"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const DrVcardHeader: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="VcardHeader">
        <div className="VcardHeader__inner ">
          {/* logo */}
          <div className="VcardHeader__logo">
            <Image
              src="/assets/images/drLogo.png"
              alt="user profile"
              objectFit="contain"
              layout="fill"
            />
          </div>
          {/* name */}
          <div className="VcardHeader__name">
            <h2>Dr. Manoghya Sharma</h2>
          </div>
          {/* profile */}
          <div className="VcardHeader__profile">
            <h2>PhysioTherapist</h2>
            <h4>(BPT)</h4>
          </div>
          {/* contact */}
          <div className="VcardHeader__contacts">
            <div className="VcardHeader__contact">
              <Link href={"tel:+91 9358774581"}>
                <div className="py-2">
                  <div className="text-xl py-1">
                    <FaPhoneAlt className="mx-auto" />
                  </div>
                  Call
                </div>
              </Link>
            </div>
            <div className="VcardHeader__contact">
              <Link href={"mailto:manoghyasharma28@gmail.com"}>
                <div className="py-2">
                  <div className="text-2xl py-1">
                    <IoMdSend className="mx-auto" />
                  </div>
                  mail
                </div>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default DrVcardHeader;
