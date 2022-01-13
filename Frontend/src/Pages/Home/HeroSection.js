import React, { Component, useEffect } from 'react'

const HeroSection = () => {
    return (<>
        <div>
            <section class="bg-gray-200 text-gray-900 relative">
            
              <div class="min-h-screen bg-right-bottom bg-cover flex" style={{backgroundImage : `url("/assets/WebsiteRenders/All45Dark.png")`}}>
                <div class="relative container mx-auto p-4 flex items-end z-10 font-encode font-extrabold mb-20">
                  <div data-aos="fade-left">
                    <div class="content float-left py-4 px-5 my-5 text-gray-100">
                      <div class="heading mb-3 text-4xl md:text-4xl lg:text-7xl">COMING SOON</div>
                      <div class="text leading-normal hidden sm:block">Helping Those From the Future Find Purpose</div>
                    </div>
                    <div class="cta clear-left px-5">
                      <a class="
                            no-underline
                            btn btn-primary rounded-full bg-white px-4 py-2 text-gray-900
                            block inline-block global-transition text-center hover:bg-yellow-400" href="https://twitter.com/PsymonClub" target="blank" >
                        <div class="flex justify-center items-center">
                          <span class="hidden sm:block">Follow us</span>
                          <span class="fab fa-lg fa-twitter sm:ml-4"></span>
                        </div>
                      </a>
                      <a class="
                            no-underline
                            btn btn-primary rounded-full bg-white mx-3 px-4 py-2 text-gray-900
                            block inline-block global-transition text-center hover:bg-yellow-400" href="https://discord.gg/M2835FP6zg" target="blank" >
                        <div class="flex justify-center items-center">
                          <span class="hidden sm:block">Join Our Discord Server</span>
                          <span class="fab fa-lg fa-discord sm:ml-4"></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
    </>  
    )
}

export default HeroSection
