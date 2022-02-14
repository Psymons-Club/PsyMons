import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WorkingSection from './WorkingSection'
import FooterSection from './FooterSection'
import RoadmapSection from './RoadmapSection'
import Gallery from './Gallery' 

import Aos from 'aos'
import 'aos/dist/aos.css'
import HowItWorks from './AboutUs'

export default function () {
    useEffect(() => { Aos.init({ duration: 1000 }) }, [])
    return (<>
        <HeroSection />
        <IntroSection />
        <WorkingSection />
        <RoadmapSection />
        <Gallery />
        <FooterSection />
    </>)
}
