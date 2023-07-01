'use client';
 
import React, { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import particleConfig from "../../config/particleConfig.json"

const ParticleBackground:React.FC = ():JSX.Element=>{
    const particleInit = useCallback(async (engine:any)=>{
        console.log(engine);
        await loadFull(engine)
    },[])
    const particleLoaded = useCallback(async (container:any)=>{
        await console.log(container);
        
    },[])
    return(
        <>
        <div id="particleBg">
            <Particles 
            id="tsParticle"
            init={particleInit}
            loaded={particleLoaded}
            options={particleConfig}
            height="50vh"
            width="100vw"
            />
        </div>
        </>
    )
}

export default ParticleBackground