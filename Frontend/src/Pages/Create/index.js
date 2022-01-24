import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import NervosContext from "../../Contexts/NervosContext";

const Create = ()=>{
    const {mint, account} = useContext(NervosContext);
    const [mintState,setMintState] = useState();
    const handleClickMint = async ()=>{
        setMintState(true)
        const result = await mint();
        console.log(result);
        setMintState(false);
    }
    return (<>
        <div>
            <section class="bg-gray-200 text-gray-900 relative">
            
              <div class="min-h-screen bg-right-bottom bg-cover flex" style={{backgroundImage : `url("/assets/WebsiteRenders/All45Dark.png")`}}>
                <div className="w-full h-screen flex items-center justify-center">
                   {account?
                    <button
                    disabled={mintState}
                    onClick={handleClickMint} 
                    class="
                            no-underline
                            btn btn-primary rounded-full bg-white px-4 py-2 text-gray-900
                            block inline-block global-transition text-center hover:bg-yellow-400" href="https://twitter.com/PsymonClub" target="blank" >
                        <div class="flex justify-center items-center">
                          <span class="hidden sm:block">Mint{mintState &&"ing"} a Psymon</span>
                         
                        </div>
                      </button>:
                      <div className="text-3xl text-white font-bold">Connect to wallet first!</div>
}
                </div>
              </div>
            </section>
        </div>
    </>  
    )
}
export default Create;