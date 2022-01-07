import { Popover } from '@headlessui/react'
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { AuthenticateMetaMask } from '../../DAppModules/WalletConnection/config';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    return (
        <Popover className="relative dark-theme font-encode">
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex items-center justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/assets/logo.svg"
                                alt="PSY"
                            />
                        </Link>
                        <div className="ml-4 font-extrabold text-2xl text- ">PSYmons</div>
                    </div>
                    <Link to="/home" className="text-base font-medium text-gray-100 hover:text-yellow-300">
                        Home
                    </Link> */}
                    {/* <Link to="/new" className="text-base font-medium text-gray-100 hover:text-gray-900">
                        Marketplace
                    </Link>
                    <Link to="/pets" className="text-base font-medium text-gray-100 hover:text-gray-900">
                        My Mons
                    </Link>
                    <Link to="/" className="text-base font-medium text-gray-100 hover:text-gray-900">
                        Shop
                    </Link> */}
                    

                    {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                        <button
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white" style={{ backgroundColor:"#D95B2B"}}
                            onClick={async () => {
                                await AuthenticateMetaMask()
                                setIsLoggedIn(true);
                            }}
                        >
                            {window?.ethereum?.selectedAddress ? `${window?.ethereum?.selectedAddress}`: "Connect to a wallet"}
                        </button>
                    </div>
                </div>
            </div> */}

            <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="/assets/logo.svg"
                                    alt="PSY"
                                />
                <span class="font-semibold text-xl tracking-tight">PSYMONS</span>
            </div>

            <label class="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" for="menu-toggle"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
                <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Home
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Working
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Blog
                </a>
                </div>
                <div class="block">
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Connect to Wallet</a>
                </div>
            </div>
            </nav>
        </Popover>
    )
}