import React, { Component } from 'react'

export class FooterSection extends Component {
    render() {
        return (
            <div>
                <footer class=" text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4 ">
                            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-200">
                        <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
                        <div class="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
                            <input class="sm:w-64 w-40 bg-gray-100 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4" placeholder="Placeholder" type="text" />
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                            <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                            <br class="lg:block hidden" />waistcoat green juice
                            </p>
                        </div>
                        <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <a class="text-gray-500">
                            <i class="fa fa-facebook-f"></i>
                            </a>
                            <a class="ml-3 text-gray-500">
                            <i class="fa fa-twitter"></i>
                            </a>
                            <a class="ml-3 text-gray-500">
                            <i class="fab fa-discord"></i>
                            </a>
                        </span>
                        </div>
                    </div>
                    <div class="bg-gray-200">
                        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailwind Blocks —
                            <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
                        </p>
                        <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
                        </div>
                    </div>
                    </footer>
            </div>
        )
    }
}

export default FooterSection
