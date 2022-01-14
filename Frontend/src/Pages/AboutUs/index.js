import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

const textToShow = [
    "Once upon a Time.... ",
    "In 1001 AAI, technology had evolved to a point where it started sustaining itself. ",
    "AI was not only doing what Humans did but started doing it better. ",
    "The AI grew to become their own species- they evolved, even created their own Pets - \"PsyMons.\" ",
    "Everything was perfect; for a long time, Humans and AI lived in Harmony but... just like every sci-fi movie with an AI villain, they soon realized that no matter how much they tried to make our lives better, it didn’t matter. The AI believed that Humans were going to keep making things worse.",
    "Soon, the AI started a war on humankind we weren’t prepared for... A few rebel groups struggled for years and were finally able to take out the AI; it lived on its own autonomous network the Web 4.0- but this got destroyed by the rebel groups. ",
    "In its last fraction of a nano-second the AI saved the one thing that signified the only ‘love’ it ever felt: The mere 1000 PsyMons that were transported to web 3.0 before the network was destroyed",
    "Now the PsyMons lie dormant, waiting for someone to revive them and give them purpose.",
]
const AboutUs = ({ }) => {
    const typewriterRef = useRef(null);
    const [text, setText] = useState(0);
    const [currentState, setCurrentState] = useState(0);
    const [complete, setComplete] = useState(false);
    const handleClick = (offset) => {
        const newState = currentState + offset;
        if (newState < 0) {
            return;
        }
        if (newState == textToShow.length) {
            setComplete(true);
            return;
        }
        setCurrentState(newState);
    }
    return (<>
        <div className="w-full text-white h-screen flex items-center justify-around bg-right-bottom bg-cover" style={{backgroundImage : `url("/assets/WebsiteRenders/All45Dark.png")`}}>
            <div className="w-full px-8 text-center sm:text-left my-auto md:pl-32" >
                <h1 class="title-font sm:text-4xl text-3xl sm:mb-4 font-medium text-yellow-400 font-extrabold lg:text-5xl">From Web 4.0
                    <br />To Web 3
                </h1>
                <div className=" w-full md:w-3/5 font-encode md:font-bold">
                    {textToShow.map((text) => (<div class="">
                            {text}
                        </div>))
                    }
                </div>
            </div>
        </div>
    </>);
}
export default AboutUs