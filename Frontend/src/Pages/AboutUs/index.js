import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

const textToShow = [
    "Once upon a Time....",
    "In 1001 AAI , technology had evolved to a point where it started sustaining itself.",
    "AI was not only doing what Humans did but started doing it better.",
    "They grew to become their own species, they evolved, even created their own Pets - PsyMons",
    "Everything was perfect, for a long time Humans and AI lived in Harmony but.......",
    "just like every sci-fi movie with an AI villain, they soon realized that no matter how much they tried to make our lives better, it doesn’t matter.",
    " Humans are going to keep making it worse and worse.",
    "Soon it started a war on human kind, which we weren’t prepared for....",
    "A few rebel groups struggled for years and were finally able to take out the AI. ",
    "The AI lived on it’s own autonomous network the Web 4.0, which got destroyed by the rebel groups. ",
    "Even in its last fraction of nano-seconds it saved the one thing that signified the only ‘love’ it ever felt. ",
    "A mere 1000 PsyMons were transported to web 3.0 before the network was destroyed. Now their lie dormant, waiting for someone to revive them and give them purpose.",
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
        <div className="w-full text-white h-screen flex items-center justify-around">
            {complete ? <div className="w-full px-8">
                {textToShow.map((e) => <><br /><div>{e}</div><br /></>)}
            </div> : <>
                {currentState > 0 && <button onClick={() => handleClick(-1)} className="flex-grow-0">
                    Left
                </button>}

                <div className="px-8 flex-grow" ref={typewriterRef}>
                    <div className="w-full text-center">
                        <Typewriter
                            options={{
                                strings: textToShow[currentState],
                                autoStart: true,
                                loop: false,
                                cursor: "",
                                delay: 10,

                            }}
                        />
                    </div>
                </div>
                <button onClick={() => handleClick(1)} className="flex-grow-0">
                    Right
                </button>
            </>}

        </div>
    </>);
}
export default AboutUs