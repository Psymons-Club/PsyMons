import React, { Component } from 'react'

export class HeroSection extends Component {
    render() {
        return (<>
            <div>
                {/* <div class="bg-red-200 sticky top-0">
                
                <nav class="flex py-3 items-center h-16 max-w-global">
                    <div class="flex-1 flex items-center justify-start">
                        <div class="sm:hidden px-3">
                            <i class="fas fa-bars text-primary cursor-pointer" data-modal-toggle="mobile-nav">
                            </i>
                        </div>
                        <a class="no-underline global-transition cursor-pointer border-b hover:border-primary border-transparent border-solid text-body1 sm:text-body2 text-primary hidden sm:inline mx-3" data-modal-toggle="treatments">
                            Treatments
                        </a>
                        <a class="no-underline global-transition cursor-pointer border-b hover:border-primary border-transparent border-solid text-body1 sm:text-body2 text-primary hidden sm:inline mx-3" data-modal-toggle="learn">
                            Learn
                        </a>
                    </div>
                    <a class="flex-1 text-center h-full flex justify-center items-center" href="/">
                        <img src="https://www.helloalpha.com/static/images/alpha_forest.png" class="w-32" />
                    </a>
                
                            <div class="flex-1 flex items-center justify-end">
                                        <a class="no-underline global-transition cursor-pointer border-b hover:border-primary border-transparent border-solid text-body1 sm:text-body2 text-primary hidden sm:inline mx-3" href="https://app.helloalpha.com/my-cases/">
                                Login
                            </a>
                            <a class="no-underline global-transition cursor-pointer border-b hover:border-primary border-transparent border-solid text-body1 sm:text-body2 text-primary sm:mx-3 border border-primary p-2 hover:bg-violator-60" href="/#conditions">
                                Get Started
                            </a>
                        </div>
                    
                    </nav>
                            </div> */}
                <section class="bg-red-200 text-gray-900 relative">
                
                  <div class="min-h-screen hero-image bg-right-bottom bg-cover flex" style={{backgroundImage : `url("/assets/WebsiteRenders/Allwith45Yellow.png")`}}>
                    <div class="relative container mx-auto p-4 flex items-end z-10 font-encode font-extrabold">
                      <div>
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
}

export default HeroSection
