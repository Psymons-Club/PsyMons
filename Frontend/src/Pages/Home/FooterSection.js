import React, { Component } from 'react'

export class FooterSection extends Component {
    render() {
        return (
            <div>
                <footer class=" text-gray-700 body-font">
                    <div class="bg-gray-900">
                        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left">© PsyMons belong to VikingsTech
                            <a href="https://twitter.com/vikings__tech" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@VikingsTech</a>
                        </p>
                        <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Coming Soon on the Nervos Chain</span>
                        </div>
                    </div>
                    </footer>
            </div>
        )
    }
}

export default FooterSection
