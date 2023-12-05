import Token from "../artifacts/Token.json";
import FullDApp from "../artifacts/FullDapp.json";
import { store } from "../app/store";
import { initWeb3 } from "../features";
import { DAppAddress, TokenAddress } from "../CONSTANTS";

async function getTronWebb() {
	let tronWeb = null;
	let tronLink = window.tronLink;


	const res = await tronLink.request({ method: 'tron_requestAccounts' });
	console.log("response address ; ", res);


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
		let contract, token, tronWeb;


		if (!window.tronLink) {
            console.log("tronLink Wallet is not installed");
			return;
        }
		const res = await window.tronLink.request({ method: 'tron_requestAccounts', });


		if (res.code === 200) {    // user accepts the connection
			console.log(res.massage);
			tronWeb = window?.tronLink?.tronWeb
			contract = await tronWeb.contract(FullDApp.abi, DAppAddress);
			token = await tronWeb.contract(Token.abi, TokenAddress);
			return { token, contract, provider: tronWeb };

		} else if (!res.code)    // user accepts the connection
			console.log("Wallet is Locked");
		
		else if (res.code === 4001)     // user rejects the connection
			console.log(res.massage);
		
		return { token: undefined, contract: undefined, provider: undefined };




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
	}
}

export { getTronWeb }