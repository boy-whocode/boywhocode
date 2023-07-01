'use client';
 
import React, { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import particleConfig from "../../config/particleConfig.json"

const ParticleBackground:React.FC = ():JSX.Element=>{
    const particleInit = useCallback(async (engine)=>{
        console.log(engine);
        await loadFull(engine)
    },[])
    const particleLoaded = useCallback(async (container)=>{
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
            // options={{
            //     background: {
            //         color: {
            //           value: "#000"
            //         },
            //         image: "",
            //         position: "",
            //         repeat: "",
            //         size: "",
            //         opacity: 1
            //       },
            //       backgroundMask: {
            //         composite: "destination-out",
            //         cover: {
            //           color: {
            //             value: "#fff"
            //           },
            //           opacity: 1
            //         },
            //         enable: false
            //       },
            //     fpsLimit: 120,
            //     interactivity: {
            //         events: {
            //             onClick: {
            //                 enable: false,
            //                 mode: "push",
            //             },
            //             onHover: {
            //                 enable: false,
            //                 mode: "repulse",
            //             },
            //             resize: true,
            //         },
            //         modes: {
            //             push: {
            //                 quantity: 4,
            //             },
            //             repulse: {
            //                 distance: 200,
            //                 duration: 0.4,
            //             },
            //         },
            //     },
            //     particles: {
            //         color: {
            //             value: "#ffffff",
            //         },
            //         links: {
            //             color: "#ffffff",
            //             distance: 150,
            //             enable: true,
            //             opacity: 0.5,
            //             width: 1,
            //         },
            //         collisions: {
            //             enable: true,
            //         },
            //         move: {
            //             direction: "none",
            //             enable: true,
            //             outModes: {
            //                 default: "bounce",
            //             },
            //             random: false,
            //             speed: 6,
            //             straight: false,
            //         },
            //         number: {
            //             density: {
            //                 enable: true,
            //                 area: 800,
            //             },
            //             value: 80,
            //         },
            //         opacity: {
            //             value: 0.5,
            //         },
            //         shape: {
            //             type: "circle",
            //         },
            //         size: {
            //             value: { min: 1, max: 5 },
            //         },
            //     },
            //     detectRetina: true,
            // }}
            height="50vh"
            width="100vw"
            />
        </div>
        </>
    )
}

export default ParticleBackground