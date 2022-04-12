import React, { Component } from 'react'

export class IntroSection extends Component {
    content = [{
        firstLine: "What ",
        secondLine: "are we?",
        description: "We are a community that loves science fiction and metaverse. Our Game is a promise to bring everything that you imagine in a metaverse game to reality. Our AR focused NFT game is not just another NFT project. Come join us in our journey to revolutionize gaming on Blockchain."
    }]
    render() {
        return (
            <div>
                {this.content.map((section) => (
                    <div>
                        {console.log(section)}
                        <section class="font-encode dark-theme border-t border-gray-200">
                            <div class="container mx-auto w-5/6 flex px-5 py-24 md:flex-row flex-col items-center">
                                <div data-aos="fade-right" class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-extrabold lg:text-7xl">{section.firstLine}
                                        <br class="hidden lg:inline-block" />{section.secondLine}
                                    </h1>
                                    <p class="mb-8 leading-relaxed">{section.description}</p>
                                    <div class="flex justify-center">
                                        {/* <button class="ml-4 inline-flex text-gray-900 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button> */}
                                    </div>
                                </div>
                                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <img class="object-cover object-center rounded" alt="hero" src="/assets/WebsiteRenders/AllNoBG.png" />
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </div>

        )
    }
}

export default IntroSection
