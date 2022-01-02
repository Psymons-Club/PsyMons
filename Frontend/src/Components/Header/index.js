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
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                    <Link to="/home" className="text-base font-medium text-gray-100 hover:text-gray-900">
                        Home
                    </Link>
                    <Link to="/new" className="text-base font-medium text-gray-100 hover:text-gray-900">
                        Marketplace
                    </Link>
                    <Link to="/pets" className="text-base font-medium text-gray-100 hover:text-gray-900">
                        My Mons
                    </Link>
                    <Link to="/" className="text-base font-medium text-gray-100 hover:text-gray-900">
                        Shop
                    </Link>
                    

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

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
            </div>


        </Popover>
    )
}