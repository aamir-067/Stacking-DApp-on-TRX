import { Link, NavLink } from "react-router-dom";

export default function nav() {
	return (
		<>
			<div className="w-full px-6 h-20 flex justify-between items-center border-black border-2 bg-black/50">
				<div className="flex justify-start gap-x-3 items-center w-5/12 md:w-3/12">
					<button
						type="button"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						Connect Wallet
					</button>
					<p className="text-white text-lg">0x000</p>
				</div>

				<div className="flex justify-between w-3/12 mr-20 items-center">
                    <NavLink to={""} className={({isActive})=> `${isActive ? "text-blue-700" : "text-white"} font-bold text-lg`}>Home</NavLink>
                    <NavLink to={"operations"} className={({isActive})=> `${isActive ? "text-blue-700" : "text-white"} font-bold text-lg`}>Operations</NavLink>
                    <NavLink to={"dashboard"} className={({isActive})=> `${isActive ? "text-blue-700" : "text-white"} font-bold text-lg`}>Dashboard</NavLink>
				</div>
			</div>
		</>
	);
}
