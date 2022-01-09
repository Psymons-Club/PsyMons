import React, { Component } from 'react'



export class RoadmapSection extends Component {
    content = [{
        time: "Milestone 1, by Feb 2022",
        description: "Pre-sale and minting of PsyMons. Launch of the community page"
    },
    {
        time: "Milestone 2, by April 2022",
        description: "Launch of AR companion app to interact with PsyMons and earn Psys.(Player-Psymon interaction)"
    },
    {
        time: "Milestone 3, by May 2022",
        description: "Release of the Player-Player interactions on the Companion App."
    },]
    render() {
        return (
            <div >
                <section class="border-t border-gray-200 font-encode dark-theme">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-extrabold lg:text-7xl text-center w-full">Roadmap</h1>
                        <div data-aos="fade-up"class="timeline flex flex-col px-15 flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            <div class="outer">
                                {this.content.map((time) => (
                                    <div class="card">
                                        <div class="info">
                                            <h3 class="title font-extrabold">{time.time}</h3>
                                            <p>{time.description} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" class="object-center justify-center w-full" src="/assets/WebsiteRenders/JockNoBG.png" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default RoadmapSection
