import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props:any) => {
    return (
      <section
        className={`h-screen flex flex-col justify-center p-10 ${
          props.right ? "items-end" : "items-start"
        }`}
        style={{
          opacity: props.opacity,
        }}
      >
        <div className="w-1/2 flex items-center justify-center">
          <div className="max-w-sm w-full">
            <div className="bg-white  rounded-lg px-8 py-12">
              {props.children}
            </div>
          </div>
        </div>
      </section>
    );
  };

const Overlay = () => {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);
  
    useFrame(() => {
      setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
      setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
      setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
    });
  
    return (
      <Scroll html>
        <div className="w-screen">
          <Section opacity={opacityFirstSection}>
            <h1 className="font-semibold font-serif text-2xl text-black">Hello, I am Rahul Sharma</h1>
            <p className="mt-3">I know:</p>
            <ul className="leading-9">
              <li>🧑‍💻 How to code</li>
              <li>🧑‍🏫 How to learn</li>
              <li>📦 How to deliver</li>
            </ul>
            <p className="animate-bounce  mt-6">↓</p>
          </Section>
          <Section right opacity={opacitySecondSection}>
            <h1 className="font-semibold font-serif text-2xl">
              Here are my skillsets 🔥
            </h1>
            <p className="text-gray-500">PS: I never test</p>
            <p className="mt-3">
              <b>Frontend 🚀</b>
            </p>
            <ul className="leading-9">
              <li>Next.js</li>
              <li>React.js</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>BEM</li>
              <li>HTML/ HTML5</li>
              <li>CSS/ CSS3</li>
              <li>Styled Component</li>
              <li>Bootstrap/ ReactBootstrap</li>
              <li>SASS</li>
              <li>Team work</li>
              <li>Decision Making</li>
              
            </ul>
            <p className="animate-bounce  mt-6">↓</p>
          </Section>
          <Section opacity={opacityLastSection}>
            <h1 className="font-semibold font-serif text-2xl">
              🤙 Call me maybe?
            </h1>
            {/* <p className="text-gray-500">
              I'm very expensive but you won't regret it
            </p> */}
            <p className="mt-6 p-3 bg-slate-200 rounded-lg">
              📞 <a href="tel:+91 8696232306">(+91) 8696232306</a>
            </p>
          </Section>
        </div>
      </Scroll>
    );
  };

export default Overlay;