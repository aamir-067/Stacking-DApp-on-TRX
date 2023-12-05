import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Hourglass } from "react-loader-spinner"
import { getDetails } from "../utils/interactions";
const Dashboard = () => {
	const personRecord = useSelector(state => state.peerDetails);


	const provider = useSelector(state => state.web3Api)?.provider;
	const address = provider?.defaultAddress.base58;

	useEffect(() => {
		const fetchDetails = async () => {
			const res = await getDetails();
		}
		if (address && personRecord?.inWallet == -1) fetchDetails();   //  to get the details iff the wallet is connected.
	}, []);

	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className={`w-8/12 mt-10 ${(personRecord.inWallet != -1) ? "" : "hidden"}`}>
				<h1 className="text-center my-4 text-white font-bold text-3xl">
					User Dashboard
				</h1>
				<div className="text-white flex h-32 mb-20 justify-between items-stretch">
					<div className="bg-amber-600 w-4/12 flex flex-col justify-center p-4">
						<h2>Tokens in wallet</h2>
						<h2>{(personRecord.inWallet).toFixed(2)} TRX</h2>
					</div>
					<div className="bg-lime-600 w-4/12 flex flex-col justify-center p-4">
						<h2>Tokens in liquidity pool</h2>
						<h2>{(personRecord.total).toFixed(4)} TRX</h2>
					</div>
					<div className="bg-fuchsia-600 w-4/12 flex flex-col justify-center p-4">
						<h2>Reward Tokens generated</h2>
						<div className="flex gap-4">
							<h2>{(personRecord.reward).toFixed(2)} TKN</h2>
							<button className="font-bold border-b-2">refresh</button>
						</div>
					</div>
				</div>

				<h1 className="text-center my-4 text-white font-bold text-3xl">
					Transactions History
				</h1>
				<div className="overflow-x-auto">
				{personRecord.history.length > 0 ?
					<table className="min-w-full divide-y-2 divide-gray-200 bg-transparent border-white border-collapse border-2 text-sm">
						<thead className="bg-blue-600">
							<tr>
								<th className="whitespace-nowrap px-4 py-2 border-x-2 border-white font-bold text-lg text-left text-gray-50">
									Amount
								</th>
								<th className="whitespace-nowrap px-4 py-2 border-x-2 border-white font-bold text-lg text-left text-gray-50">
									Time
								</th>
								<th className="whitespace-nowrap px-4 py-2 border-x-2 border-white font-bold text-lg text-left text-gray-50">
									Type
								</th>
								<th className="whitespace-nowrap px-4 py-2 border-x-2 border-white font-bold text-lg text-left text-gray-50">
									Transaction ID
								</th>
							</tr>
						</thead>
						<tbody className="w-full">
									{
										personRecord.history.map((item, index) => {
											return <tr key={index} className="text-left border-2 border-white">
														<td className="whitespace-nowrap px-4 py-2 border-x-2 border-white font-medium text-gray-50">
															{provider.toDecimal(item[0]) / 1000000} TRX
														</td>
														<td className="whitespace-nowrap px-4 py-2 border-x-2 border-white text-gray-50">
															{new Date(provider.toDecimal(item[2]) * 1000).toLocaleString()}
														</td>
														<td className="whitespace-nowrap px-4 py-2 border-x-2 border-white text-gray-50">
															{provider.toDecimal(item[1]) === 0 ? "Deposit" : "Withdrawal"}
														</td>
														<td className="whitespace-nowrap px-4 py-2 border-x-2 border-white flex gap-x-5">
														<p className="text-gray-50">76mh98fyi977</p>
														<button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 dark:bg-blue-600 dark:hover:bg-blue-700">
															view
														</button>
													</td>
											</tr>
										})
									}
						</tbody>	
					</table> :
					(<h2 className="text-2xl text-center font-bold text-slate-100">No Records found</h2>)
				}
				</div>
			</div>

			{/* // loading  */}
			<div className={`${(personRecord.inWallet != -1) ? "hidden" : ""} flex items-center mt-40 justify-center w-full h-full`}>
				<div className="flex flex-col items-center space-x-1 text-sm text-gray-700">
					<Hourglass
						visible={true}
						height="150"
						width="150"
						ariaLabel="hourglass-loading"
						wrapperStyle={{}}
						wrapperClass=""
						colors={['#306cce', '#72a1ed']}
					/>
					<h2 className="text-slate-200 my-6 text-3xl">Waiting for to fetch data...</h2>
					<h2 className="text-slate-200 text-lg">kindly connect you wallet if not connected by clicking the above button</h2>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
