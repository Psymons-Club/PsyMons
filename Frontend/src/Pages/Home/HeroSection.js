import React, { Component, useEffect } from 'react'

const HeroSection = () => {
    return (<>
        <div>
            <section class="bg-red-200 text-gray-900 relative">
            
              <div class="min-h-screen hero-image bg-right-bottom bg-cover flex" style={{backgroundImage : `url("/assets/WebsiteRenders/Allwith45Yellow.png")`}}>
                <div class="relative container mx-auto p-4 flex items-end z-10 font-encode font-extrabold">
                  <div data-aos="fade-left">
                    <div class="content float-left py-4 px-5 my-5">
                      <div class="heading mb-3 text-4xl md:text-4xl lg:text-7xl">PSYMONS</div>
                      <div class="text leading-normal hidden sm:block">Helping Those From the Future Find Purpose</div>
                    </div>
                    <div class="cta clear-left px-5">
                      <a class="
                            no-underline
                            btn btn-primary rounded-full bg-white px-4 py-2 text-gray-900
                            block sm:inline-block global-transition text-center" href="" target="">
                        <div class="flex justify-center items-center">
                          <span>Get One</span>
                          <span class="fa fa-xs fa-arrow-right ml-4"></span>
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
