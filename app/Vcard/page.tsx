import React from "react";
import ParticleBackground from "./ParticleBackground";
import VcardBody from "./VcardBody";
import VcardHeader from "./VcardHeader";

export default function VCard(): JSX.Element {
  return (
    <>
      <div>
        <ParticleBackground />
        <VcardHeader />
      </div>
      <VcardBody />
    </>
  );
}
