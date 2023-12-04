import Token from "../artifacts/Token.json";
import FullDApp from "../artifacts/FullDapp.json";
import { store } from "../app/store";
import { initWeb3 } from "../features";
import { DAppAddress, TokenAddress } from "../CONSTANTS";

async function getTronWebb() {
    let tronWeb = null;
    let tronLink = window.tronLink;


    const res = await tronLink.request({ method: 'tron_requestAccounts' });
    console.log("response address ; ",res);


    if (window.tronLink.ready) {
      tronWeb = tronLink.tronWeb;
    } else {
      const res = await tronLink.request({ method: 'tron_requestAccounts' });
      if (res.code === 200) {
        tronWeb = tronLink.tronWeb;
      }
    }
    // const address = tronWeb.defaultAddress.base58;
    return tronWeb;
  }

async function getTronWeb() {
    try {
        let contract, token;
        let tronWeb = await getTronWebb();

        console.log(tronWeb);
        if(!tronWeb){
            return {token : undefined,contract : undefined, provider: undefined};
        }else{
            contract = await tronWeb.contract(FullDApp.abi, DAppAddress);
            token = await tronWeb.contract(Token.abi, TokenAddress);
        }




        // subscribe to events 

        // window.tronLink.on('message', async function (e) {
        //     if (e.data.message && e.data.message.action === "accountsChanged") {
        //         await getTronWeb();
        //         console.log('got accountsChanged event', e.data)
        //     }else if(e.data.message && e.data.message.action === "setNode"){
        //         await getTronWeb();
        //         console.log('got contractChanged event', e.data);
        //     }
        // });



        // store.dispatch(initWeb3({token, contract, provider: tronWeb}));
        return {token, contract, provider: tronWeb};
        
    } catch (e) {
        console.log(e);
    }
}

export {getTronWeb}