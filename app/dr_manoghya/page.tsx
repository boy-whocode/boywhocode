import React from "react";
import ParticleBackground from "../Vcard/ParticleBackground";
import DrVcardHeader from "./DrVcardHeader";
import DrVcardBody from "./DrVcardBody";


export default function DrManoghya(): JSX.Element {
  return (
    <>
      <div>
        <ParticleBackground />
        <DrVcardHeader />
      </div>
      <DrVcardBody />
    </>
  );
}
