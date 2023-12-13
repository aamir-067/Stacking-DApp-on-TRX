import Token from "../artifacts/Token.json";
import FullDApp from "../artifacts/FullDapp.json";
import { store } from "../app/store";
import { initWeb3 } from "../features";
import { DAppAddress, TokenAddress } from "../CONSTANTS";

async function getTronWeb() {
	try {
		let contract, token, tronWeb;


		if (!window.tronLink) {
            console.log("tronLink Wallet is not installed");
			return "tronLink Wallet is not installed";
        }
		const res = await window.tronLink.request({ method: 'tron_requestAccounts', });


		if (res.code === 200) {    // user accepts the connection
			tronWeb = window?.tronLink?.tronWeb;
			contract = await tronWeb.contract(FullDApp.abi, DAppAddress);
			token = await tronWeb.contract(Token.abi, TokenAddress);
			store.dispatch(initWeb3(
                {
					provider: tronWeb,
                    contract: contract,
                    token: token
				}
			));

			return true;

		} else if (!res.code)    // user accepts the connection
			return "Wallet is Locked";
		
		else if (res.code === 4001){     // user rejects the connection
			store.dispatch(initWeb3(
				{
					provider: undefined,
                    contract: undefined,
                    token: undefined
				}
			))
			return res.massage;

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

	} catch (e) {
		console.log(e);
		return "unexpected error occurred";
	}
}

export { getTronWeb }