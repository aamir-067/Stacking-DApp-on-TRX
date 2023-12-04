import React, { useEffect } from "react";
import { store } from "../app/store";
import {useSelector} from "react-redux";
const Dashboard = () => {
	const [details, setDetails] = React.useState(null);

	const fetchDetails = async () => {

	}

		const address = useSelector(state => state.web3Api)?.provider?.defaultAddress.base58;


	return (
		<div className="w-full flex justify-center items-center">
			<div className={`w-8/12 mt-10 ${address ? "" : "hidden"}`}>
				<h1 className="text-center my-4 text-white font-bold text-3xl">
					User Dashboard
				</h1>
				<div className="text-white flex h-32 mb-20 justify-between items-stretch">
					<div className="bg-amber-600 w-4/12 flex flex-col justify-center p-4">
						<h2>Tokens in wallet</h2>
						<h2>340 TRX</h2>
					</div>
					<div className="bg-lime-600 w-4/12 flex flex-col justify-center p-4">
						<h2>Tokens in liquidity pool</h2>
						<h2>340 TRX</h2>
					</div>
					<div className="bg-fuchsia-600 w-4/12 flex flex-col justify-center p-4">
						<h2>Reward Tokens generated</h2>
						<div className="flex gap-4">
							<h2>340 TRX</h2>
							<button className="font-bold border-b-2">refresh</button>
						</div>
					</div>
				</div>

				<h1 className="text-center my-4 text-white font-bold text-3xl">
					Transactions History
				</h1>
				<div class="overflow-x-auto">
					<table class="min-w-full divide-y-2 divide-gray-200 bg-transparent border-white border-collapse border-2 text-sm">
						<thead class="bg-blue-600">
							<tr>
								<th class="whitespace-nowrap px-4 py-2 border-x-2 border-white font-bold text-lg text-left text-gray-50">
									Amount
								</th>
								<th class="whitespace-nowrap px-4 py-2 border-x-2 border-white font-bold text-lg text-left text-gray-50">
									Time
								</th>
								<th class="whitespace-nowrap px-4 py-2 border-x-2 border-white font-bold text-lg text-left text-gray-50">
									Type
								</th>
								<th class="whitespace-nowrap px-4 py-2 border-x-2 border-white font-bold text-lg text-left text-gray-50">
									Transaction ID
								</th>
							</tr>
						</thead>

						<tbody class="">
							<tr class="text-left border-2 border-white">
								<td class="whitespace-nowrap px-4 py-2 border-x-2 border-white font-medium text-gray-50">
									5678 TRX
								</td>
								<td class="whitespace-nowrap px-4 py-2 border-x-2 border-white text-gray-50">
									24/05/1995
								</td>
								<td class="whitespace-nowrap px-4 py-2 border-x-2 border-white text-gray-50">
									Deposit
								</td>
								<td class="whitespace-nowrap px-4 py-2 border-x-2 border-white flex gap-x-5">
									<p className="text-gray-50">76mh98fyi977</p>
									<button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 dark:bg-blue-600 dark:hover:bg-blue-700">
										view
									</button>
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>

			{/* // loading  */}
			<div class={`${address ? "hidden" : ""} flex items-center justify-center w-full h-full`}>
				<div class="flex justify-center items-center space-x-1 text-sm text-gray-700">

					<svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
						<path clip-rule='evenodd'
							d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
							fill='currentColor' fill-rule='evenodd' />
					</svg>


					<div>Loading ...</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
