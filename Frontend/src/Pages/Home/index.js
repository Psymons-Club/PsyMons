import React from 'react'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WorkingSection from './WorkingSection'
import FooterSection from './FooterSection'

export default function() {
    return (<>
    {/* <div className={`flex mx-auto`} style={{ height: "90vh" }}>
        <div class="flex flex-col items-center dark-theme my-auto mx-auto">
            <img src='/assets/WebsiteRenders/BlueVRedNoBG.png' class='side-img' alt='IMG TBD'/>
        </div>    
    </div> */}
    <HeroSection />
    <IntroSection />
    <WorkingSection />
    {/* <div className={`flex mx-auto w-4/5`} style={{ height: "100vh" }}>
        <div class="flex flex-col dark-theme w-1/2 my-auto mx-auto p-6 -m-16 rounded-lg font-encode">
            <div class="mx-auto my-auto"><img src='/assets/WebsiteRenders/Render1_no_bg.png' class='side-img' alt='IMG TBD'/></div>
        </div>
        <div class="flex flex-col dark-theme w-1/2 my-auto mx-auto p-6 -m-16 rounded-lg shadow-lg font-encode  text-right">
            <div class="font-extrabold text-7xl text-white">How it works?</div>
            <br />
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus tempor nisi, vulputate aliquam orci molestie quis.
            </div>
        </div>
    </div> */}
    <div className={`flex mx-auto w-4/5`} style={{ height: "100vh" }}>
        <div class="flex flex-col dark-theme w-1/2 my-auto mx-auto p-6 -m-16 rounded-lg shadow-lg font-encode text-left">
            <div class="font-extrabold text-7xl text-white">Roadmap</div>
            <br />
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus tempor nisi, vulputate aliquam orci molestie quis.
            </div>
        </div>
        <div class="flex flex-col items-center dark-theme w-1/2 my-auto mx-auto p-6 -m-16 rounded-lg font-encode">
            <div class="mx-auto my-auto"><img src='/assets/WebsiteRenders/Render1_no_bg.png' class='side-img' alt='IMG TBD'/></div>
        </div>
    </div>
    <div className={`flex mx-auto w-4/5`} style={{ height: "100vh" }}>
        <div class="flex flex-col items-center dark-theme w-3/5 my-auto mx-auto p-6 -m-16 rounded-lg shadow-lg font-encode text-left">
            <div class="font-extrabold text-7xl text-white">Partners</div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus tempor nisi, vulputate aliquam orci molestie quis.
            </div>
        </div>
    </div>
    <FooterSection />
</>)
}
