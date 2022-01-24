import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WorkingSection from './WorkingSection'
import FooterSection from './FooterSection'
import RoadmapSection from './RoadmapSection'

import HowItWorks from './AboutUs'

export default function () {
    return (<>
        <HeroSection />
        <IntroSection />
        <WorkingSection />
        <RoadmapSection />
        <FooterSection />
    </>)
}
