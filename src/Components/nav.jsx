import { NavLink } from "react-router-dom";
import { getTronWeb } from "../utils/contractInit";
import { store } from "../app/store";
import { initWeb3, resetPeerDetails } from "../features";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState, useEffect, useRef } from "react";
import { autoConnect, getDetails } from "../utils";
import Cookies from "js-cookie";
import { Cross as Hamburger } from "hamburger-react";
import {makeMagnet} from "sheryjs";

export default function NavBar() {
	const address = useSelector((state) => state.web3Api)?.provider?.defaultAddress.base58;
	const [toastMsg, setToastMsg] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const menuCircle = useRef(null);

	makeMagnet(".magnet",{
		duration : 2,
		debug : true,
	});

	const handleLogIn = async () => {
		if (address) {
			store.dispatch(
				initWeb3({
					contract: undefined,
					token: undefined,
					provider: undefined,
				})
			);
			setToastMsg("Wallet disconnected");
			store.dispatch(resetPeerDetails());
			Cookies.set("connected", "false");
		} else {
			const response = await getTronWeb();
			Cookies.set("connected", "true", { expires: 1 / 12 });
			if (typeof response === "boolean") {
				setToastMsg(true);
				await getDetails();
			} else {
				setToastMsg(response);
			}
		}
	};

	useEffect(() => {
		// for automatically connecting a wallet if its not locked
		autoConnect();
	}, []);

	// event to close the nav when  click outside.
	document.addEventListener("click", (e) => {
		if(e.target === menuCircle.current){
			console.log('trigerred');
		}
	})

	return (
		<>
			<div className="w-full px-6 h-20 flex justify-between items-center border-black border-2 bg-black/50">
				<div className="flex justify-start gap-x-3 items-center w-5/12 md:w-3/12">
					<button
						onClick={() => {
							handleLogIn();
						}}
						type="button"
						className={`text-white whitespace-nowrap ${
							address
								? "bg-transparent border-2 border-white hover:bg-blue-800"
								: "bg-blue-700"
						}  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-blue-700`}
					>
						{address ? "Log Out" : "connect wallet"}
					</button>
					<p className="text-white text-lg whitespace-nowrap hidden md:block">
						{address
							? [...address].slice(0, 5).join("") +"...." +[...address].slice(29, 34).join(""): ""}
					</p>
				</div>

				<div className="lg:flex justify-between w-3/12 gap-10 mr-20 items-center hidden">
					<NavLink
						to={""}
						className={({ isActive }) =>
							`${
								isActive ? "text-blue-700" : "text-white"
							} font-bold text-lg magnet`
						}
					>
						Home
					</NavLink>
					<NavLink
						to={"operations"}
						className={({ isActive }) =>
							`${
								isActive ? "text-blue-700" : "text-white"
							} font-bold text-lg magnet`
						}
					>
						Operations
					</NavLink>
					<NavLink
						to={"dashboard"}
						className={({ isActive }) =>
							`${
								isActive ? "text-blue-700" : "text-white"
							} font-bold text-lg magnet`
						}
					>
						Dashboard
					</NavLink>
				</div>
				<div className="lg:hidden magnet z-50 rounded-full ">
					<Hamburger
						color={`${isOpen ? "black" : "white"}`}
						toggle={setIsOpen}
						toggled={isOpen}
						rounded
						label="open menu"
					/>
				</div>
			</div>

			{/* responsive menu. */}

			<div
				className={`bg-white overflow-x-hidden lg:hidden w-96 h-96 pt-30 pr-40 absolute -top-28 -right-40 rounded-full z-10 duration-200 ease-in ${
					isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-x-10 -translate-y-10"
				}`}
				ref={menuCircle}
			>
				<div className="w-full h-full pl-10 flex items-center">
					<div className="flex flex-col items-start justify-around h-40 p-5">
						<NavLink
							to={""}
							onClick={() => {
								setIsOpen(false);
							}}
							className={({ isActive }) =>
								`${
									isActive ? "text-blue-700" : "text-black"
								} font-bold text-lg magnet`
							}
						>
							Home
						</NavLink>
						<NavLink
							to={"operations"}
							onClick={() => {
								setIsOpen(false);
							}}
							className={({ isActive }) =>
								`${
									isActive ? "text-blue-700" : "text-black"
								} font-bold text-lg magnet`
							}
						>
							Operations
						</NavLink>
						<NavLink
							to={"dashboard"}
							onClick={() => {
								setIsOpen(false);
							}}
							className={({ isActive }) =>
								`${
									isActive ? "text-blue-700" : "text-black"
								} font-bold text-lg magnet`
							}
						>
							Dashboard
						</NavLink>
					</div>
				</div>
			</div>

			{(() => {
				if (typeof toastMsg === "string") {
					toast.error(`${toastMsg}`, {
						position: "bottom-left",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
					setToastMsg(null);
				} else if (toastMsg === true) {
					toast.success("wallet connected successfully", {
						position: "bottom-left",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
					setToastMsg(null);
				}
			})()}
		</>
	);
}
