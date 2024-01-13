import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext=createContext({});
export const CryptoProvider=({children})=>{
    const [cryptoData, setcryptoData] = useState()

    // const getCryptoData = async () => {
      
        
    



    const getCryptoData=async()=>{
        try{
            const data=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

            `).then(res=>res.json()).then(json=>json);

            console.log(data);
            setcryptoData(data);    

        }
        catch(error){
            console.log(error);
        }
    }

    useLayoutEffect(() => {
      getCryptoData();
    }, [])
    return(
        <CryptoContext.Provider value={{cryptoData}}>
            {children}
        </CryptoContext.Provider>
    )
}