import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { stackTokens, unStackTokens } from '../utils';
function Stack() {
    const tokensCount = useRef();


    const peerDetails = useSelector(state => state.peerDetails);

    const handleStack = async (e) => {
        e?.preventDefault();
        const amount = Number(tokensCount.current.value);
        const isDeposit = document.querySelector("#deposit").checked;

        if (amount >= 50) {
            if (isDeposit) { // its deposit
                console.log(isDeposit, amount);
                await stackTokens({ amount });

            } else {  // its withdrawal
                console.log(isDeposit, amount);
                await unStackTokens({ amount });
            }
        } else {
            console.log("invalid amount entered retry with correct number");
        }
    }

    return (
        <section className=''>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div className="w-4/12 bg-black/60 rounded-lg p-6 py-16">
                    <div className="mb-2 flex justify-center">
                        <span className='w-20'>
                            <img src="https://img.freepik.com/free-vector/flat-design-crypto-mining-logo-template_23-2149409054.jpg?t=st=1698559799~exp=1698560399~hmac=02efc8967937811259bbfea12251e2ebe0e0d7762de1bfd029b10bf6577ef238" alt="this application logo" />
                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-slate-100">
                        Withdraw/Deposit TRX
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-200 ">
                        Stack and earn 5% daily RWD Tokens
                    </p>

                    <div className='flex flex-col lg:flex-row justify-center gap-x-4 items-center mt-4'>
                        <div className='mx-4 gap-x-2 flex'>
                            <label htmlFor="deposit" className='text-white depositRadio'>Deposit</label>
                            <input type="radio" id='deposit' name='operation-type' checked onChange={()=>{}} />
                        </div>
                        <div className='mx-4 gap-x-2 flex'>
                            <label htmlFor="withdraw" className='text-white'>Withdraw</label>
                            <input type="radio" id='withdraw' name='operation-type' />
                        </div>
                    </div>

                    <form onSubmit={async (e) => { await handleStack(e) }} className="mt-8">
                        <div className="space-y-5">
                            <div className='mb-10'>
                                <label htmlFor="" className="text-base mb-4 font-medium text-slate-50">
                                    Enter myCoin Token Amount
                                </label>
                                <div className="mt-2">
                                    <input
                                        ref={tokensCount}
                                        className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="number"
                                        placeholder="* minimum 50 tokens allowed"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={async () => { await handleStack(undefined) }}
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Stack Tokens
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Stack