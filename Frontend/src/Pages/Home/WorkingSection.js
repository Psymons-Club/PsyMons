import React, { Component } from 'react'

export class WorkingSection extends Component {
    content = [{
        heading: "Shooting Stars",
        description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
        icon: "fa fa-xs fa-arrow-right"
    },{
        heading: "The Catalyzer",
        description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
        icon: "fa fa-xs fa-arrow-right"
    },{
        heading: "Neptune",
        description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
        icon: "fa fa-xs fa-arrow-right"
    }]
    render() {
        return (
            <div>
                <section class="body-font border-t border-gray-200 dark-theme font-encode">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-extrabold lg:text-7xl">How
                                    <br class="hidden lg:inline-block" />it works?
                                    </h1>
                            <img alt="feature" class="object-center justify-center w-full" src="/assets/WebsiteRenders/BlueVRedNoBG.png" />
                        </div>
                        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            {this.content.map((task) => (
                                <div class="flex flex-col mb-10 lg:items-start items-center">
                                    <div class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5">
                                        <i class={task.icon}></i>
                                    </div>
                                    <div class="flex-grow">
                                    <h2 class="text-lg title-font font-medium mb-3 font-bold text-white">{task.heading}</h2>
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
