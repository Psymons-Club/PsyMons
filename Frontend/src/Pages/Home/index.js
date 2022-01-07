import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WorkingSection from './WorkingSection'
import FooterSection from './FooterSection'
import RoadmapSection from './RoadmapSection'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function() {
    useEffect(() => {Aos.init({duration: 2000})}, [])
    return (<>
    <HeroSection />
    <IntroSection />
    <WorkingSection />
    <RoadmapSection />
    {/* <div className={`flex mx-auto w-4/5`} style={{ height: "100vh" }}>
        <div class="flex flex-col items-center dark-theme w-3/5 my-auto mx-auto p-6 -m-16 rounded-lg shadow-lg font-encode text-left">
            <div class="font-extrabold text-7xl text-white">Partners</div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus tempor nisi, vulputate aliquam orci molestie quis.
            </div>
        </div>
    </div> */}
    <FooterSection />
</>)
}
