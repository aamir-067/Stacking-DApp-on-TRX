import React from 'react'

const Footer = () => {
	return (
		<footer className="mt-4 bg-slate-950/75">

			<div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="flex justify-center gap-2 items-center text-teal-600 sm:justify-start">
						<span className='overflow-hidden w-10'>
							<img src="https://img.freepik.com/free-vector/flat-design-crypto-mining-logo-template_23-2149409054.jpg?t=st=1698559799~exp=1698560399~hmac=02efc8967937811259bbfea12251e2ebe0e0d7762de1bfd029b10bf6577ef238" alt="this application logo" />
						</span>
						<span className="font-bold opacity-0 md:opacity-100">MyToken</span>
					</div>

					<p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
						Copyright &copy; 2024. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer