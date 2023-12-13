import { NavLink } from "react-router-dom";
import { getTronWeb } from "../utils/contractInit";
import { store } from "../app/store";
import { initWeb3, resetPeerDetails } from "../features";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import { useState } from "react";
import { getDetails } from "../utils/interactions";
export default function NavBar() {
	const address = useSelector(state => state.web3Api)?.provider?.defaultAddress.base58;
	const [connected, setConnected] = useState(false);
	const [toastMsg, setToastMsg] = useState(null);
	
	const handleLogIn = async () => {
		if(connected){
			store.dispatch(initWeb3({
				contract : undefined,
				token : undefined,
				provider : undefined
			}));
			setToastMsg("Wallet disconnected");
			store.dispatch(resetPeerDetails());
			setConnected(false);
		}else{
			const response = await getTronWeb();
			if(typeof response === "boolean"){
				setConnected(true);
				setToastMsg(true);
				await getDetails();
			}else{
				setConnected(false);
				setToastMsg(response);
			}
		}
	}

	return (
		<>
			<div className="w-full px-6 h-20 flex justify-between items-center border-black border-2 bg-black/50">
				<div className="flex justify-start gap-x-3 items-center w-5/12 md:w-3/12">
					<button

                        onClick={() => {
                            handleLogIn();
                        }}
						type="button"
						className={`text-white whitespace-nowrap ${address ? "bg-blue-700 hover:bg-blue-800" : "bg-transparent"}  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700`}
					>
						{address ?   "Log Out" : "connect wallet"}
					</button>
					<p className="text-white text-lg whitespace-nowrap">{address ? [...address].slice(0,5).join("") + "...." + [...address].slice(29,34).join("") : ""}</p>
				</div>

				<div className="flex justify-between w-3/12 mr-20 items-center">
                    <NavLink to={""} className={({isActive})=> `${isActive ? "text-blue-700" : "text-white"} font-bold text-lg`}>Home</NavLink>
                    <NavLink to={"operations"} className={({isActive})=> `${isActive ? "text-blue-700" : "text-white"} font-bold text-lg`}>Operations</NavLink>
                    <NavLink to={"dashboard"} className={({isActive})=> `${isActive ? "text-blue-700" : "text-white"} font-bold text-lg`}>Dashboard</NavLink>
				</div>
			</div>

			{
				(()=>{
					if(typeof toastMsg === "string"){
						toast.error(`${toastMsg}`, {
							position: "bottom-left",
							autoClose: 3000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: false,
							draggable: true,
							progress: undefined,
							theme: "dark",
							})
							setToastMsg(null);
					}else if(toastMsg === true){
						toast.success('wallet connected successfully', {
							position: "bottom-left",
							autoClose: 3000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "dark",
							})
							setToastMsg(null);
					}
				})()
					
			}
		</>
	);
}
