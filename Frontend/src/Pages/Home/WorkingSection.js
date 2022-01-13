import React, { Component } from 'react'

export class WorkingSection extends Component {
    title = {
        firstLine: "How ",
        secondLine: "it works?"
    }
    content = [{
        heading: "Mint",
        description: "Get your own PsyMon from our store",
        icon: "fa fa-3x fa-plus"
    }, {
        heading: "Earn",
        description: "For every PsyMon that gets minted after yours you get reflection rewards.",
        icon: "fa fa-3x fa-money"
    }, {
        heading: "Play",
        description: "Interact with your PsyMons in AR, PvP, PvE and more to come!",
        icon: "fa fa-3x fa-gamepad"
    },

    ]

    render() {
        return (
            <div>
                <section class="body-font border-t border-gray-200 dark-theme font-encode">
                    <div class="container px-5 py-24 mx-auto w-5/6 flex flex-wrap">
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-extrabold lg:text-7xl">{this.title.firstLine}
                                    <br class="hidden lg:inline-block" />{this.title.secondLine}
                                    </h1>
                            <img alt="feature" class="object-center justify-center w-full" src="/assets/WebsiteRenders/BlueVRedDark.png" />
                        </div>
                        <div data-aos="fade-left" class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            {this.content.map((task) => (
                                <div class="flex flex-col mb-10 lg:items-start items-center">
                                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-transparent mb-5">
                                        <i class={task.icon}></i>
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-2xl title-font mb-3 font-bold text-white">{task.heading}</h2>
                                        <p class="leading-relaxed text-base">{task.description}</p>
                                        {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More 
                                        <i class="fa fa-xs fa-arrow-right p-1"> </i>
                                    </a> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default WorkingSection
