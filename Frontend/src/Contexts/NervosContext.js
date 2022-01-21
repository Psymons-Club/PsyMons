import React, { useState, createContext, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import axios from "axios"
import { Contract } from "@ethersproject/contracts";
import { ethers, BigNumber, utils } from "ethers";
import { Contract as MultiContract, Provider } from "ethers-multicall";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { AddressTranslator } from 'nervos-godwoken-integration';
import { web3 } from './testnet.config';

import abi from "./abi"




const RPC_URL = "https://godwoken-testnet-web3-rpc.ckbapp.dev";
const CHAIN_ID = 71393;
const CONTRACT_ADDRESS = "0x1ED9CBa87b742E389dBf58165e364a4CfFcEe15F";
const CHIBI_CAT_CONTRACT_ADDRESS = "0x2a4f248fbC5242560F342a382496b225E08CEC1A";
const CHIBI_VOUCHERS_CONTRACT_ADDRESS = "0x2a4f248fbC5242560F342a382496b225E08CEC1A";
const MULTI_CALL_ADDRESS = "0xd078799c53396616844e2fa97f0dd2b4c145a685"
const NervosContext = createContext();
const chibiCatsAbi={}
const chibiVouchersAbi={}


export const NervosProvider = (props) => {
    const [web3i,setWeb3i] = useState(null)
    const { activate, account, library } = useWeb3React();
    const [contract,setContract] = useState();
    const [polyjuiceAddress, setPolyjuiceAddress] = useState();
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
            } catch (error) {
                console.log(error);
                // User denied account access...
            }
      
            return web3;
        }
      
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        return null;
      }
   
    useEffect(()=>{
        if(account){
            try{
                console.log(account)
            const addressTranslator = new AddressTranslator();
            setPolyjuiceAddress(addressTranslator.ethAddressToGodwokenShortAddress(account));
            console.log(addressTranslator.ethAddressToGodwokenShortAddress(account))
            }
            catch(e){
                console.log(e)
            }
        }
        else{
            setPolyjuiceAddress(undefined)
        }
    },[account])

    const onClickMetamask = async () => {
        const _web3 = await createWeb3();
        console.log(_web3)
        setWeb3i(_web3);
           
        connectContracts(_web3)
    };
    const disconnect = async () => {
        // setAccount()
    }
    const connectContracts = async (_web3) => {
        console.log(_web3)
        const _contract = new _web3.eth.Contract(abi, CONTRACT_ADDRESS);
        console.log(_contract)
        console.log(await _contract.methods.totalSupply().call())
        console.log(account)
        await _contract.methods.mint().send({
            from: window.ethereum.selectedAddress,
            value:utils.parseEther("1")
        });
        setContract(_contract);
    }
    // useEffect(async () => {
    //     if (!library) return;
    //     const data =
    //         library?.messenger?.chainType === "hmy"
    //             ? library.provider
    //             : await library.getSigner(account);
    //     await connectContracts(data);
    //     console.log(library);
    // }, [library]);

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



    const setupContracts = async () => {
        const signer = await library?.getSigner();
        await connectContracts(signer);
    }





    const functionsToExport = { onClickMetamask };


    


    return (<NervosContext.Provider value={{ account, ...functionsToExport }}>
        {props.children}
    </NervosContext.Provider>)
}
export default NervosContext;