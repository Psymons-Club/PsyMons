import React, { useState, createContext, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import axios from "axios"
import { Contract } from "@ethersproject/contracts";
import { ethers, BigNumber, utils } from "ethers";
import { Contract as MultiContract, Provider } from "ethers-multicall";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { AddressTranslator } from 'nervos-godwoken-integration';
import TESTNETCONFIG from './testnet.config';
const { web3 } = TESTNETCONFIG;

import abi from "./abi"




const RPC_URL = "https://godwoken-testnet-web3-rpc.ckbapp.dev";
const CHAIN_ID = 71393;
const CONTRACT_ADDRESS = "0xd3c6E04E5e27b971F11222E237Cc6B5108fac06c";
const CHIBI_CAT_CONTRACT_ADDRESS = "0x2a4f248fbC5242560F342a382496b225E08CEC1A";
const CHIBI_VOUCHERS_CONTRACT_ADDRESS = "0x2a4f248fbC5242560F342a382496b225E08CEC1A";
const MULTI_CALL_ADDRESS = "0xd078799c53396616844e2fa97f0dd2b4c145a685"
const NervosContext = createContext();
const chibiCatsAbi = {}
const chibiVouchersAbi = {}


export const NervosProvider = (props) => {
    const [web3i, setWeb3i] = useState(null)
    const { activate, library } = useWeb3React();
    const [account, setAccount] = useState()
    const [contract, setContract] = useState();
    const [polyjuiceAddress, setPolyjuiceAddress] = useState();
    const [balance, setBalance] = useState();
    let chibiCatsContract, chibiVouchersContract;
    const { ethereum } = window;
    const injected = new InjectedConnector({
        supportedChainIds: [CHAIN_ID],
    });
    async function createWeb3() {
        // Modern dapp browsers...
        console.log("Creating web3")
        if (window.ethereum) {
            try {
                // Request account access if needed
                await window.ethereum.enable();
                setAccount(window.ethereum.selectedAddress)
                window.ethereum.on("accountsChanged", accounts => {
                    setAccount(accounts[0]);
                });
            } catch (error) {
                console.log(error);
                // User denied account access...
            }

            return web3;
        }

        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        return null;
    }

    useEffect(() => {
        if (account && web3i) {
            const fetchBalance = async () => {
                try {
                    console.log(account)
                    const addressTranslator = new AddressTranslator();
                    setPolyjuiceAddress(addressTranslator.ethAddressToGodwokenShortAddress(account));
                    const _l2Balance = BigInt(await web3i.eth.getBalance(account));
                    setBalance(_l2Balance / BigInt(10 ** 8));
                    console.log(_l2Balance / BigInt(10 ** 8))
                }
                catch (e) {
                    console.log(e)
                }
            }
            fetchBalance()
        }
        else {
            setPolyjuiceAddress(undefined)
        }
    }, [account, web3i])

    const onClickMetamask = async () => {
        const _web3 = await createWeb3();
        console.log(_web3)
        setWeb3i(_web3);
        if (_web3) {
            connectContracts(_web3)
        }
    };
    const disconnect = async () => {
        // setAccount()
    }
    const connectContracts = async (_web3) => {
        console.log(_web3)
        const _contract = new _web3.eth.Contract(abi, CONTRACT_ADDRESS);
        console.log(_contract)
        console.log(await _contract.methods.totalSupply().call())
        setContract(_contract);


    }


    const setupNetwork = async (chainId, rpcUrl) => {
        const provider = window.ethereum;
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: `0x${chainId.toString(16)}` }],
            });
            onClickMetamask(injected)

        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            try {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: `0x${chainId.toString(16)}`,
                            rpcUrls: [RPC_URL],
                            chainName: "Godwoken Testnet",
                            nativeCurrency: {
                                name: "ckb",
                                symbol: "CKB", // 2-6 characters long
                                decimals: 18,
                            },
                        },
                    ],
                });
            } catch (addError) {
                // handle "add" error
                console.log(addError);
            }

            // handle other "switch" errors
        }
    };







    const functionsToExport = { onClickMetamask };

    functionsToExport.mint = async () => {
        try {
            const res = await contract.methods.mint().send({
                from: window.ethereum.selectedAddress,
                value: 100000000
            });
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }
    functionsToExport.getBalanceOf = async () => {
        try {
            const res = await contract.methods.balanceOf(account)
            console.log(res);
            return res;
        }
        catch (e) {
            console.log(e);
            return 0
        }
    }



    return (<NervosContext.Provider value={{ account, balance, ...functionsToExport }}>
        {props.children}
    </NervosContext.Provider>)
}
export default NervosContext;