import React, { useState, useEffect, useRef } from 'react'
import {toast} from "react-toastify";
import { autoConnect, stackTokens, unStackTokens } from '../utils';
function Stack() {
    const tokensCount = useRef(null);
    const [isDeposit, setIsDeposit] = useState(null);
    const [toastMsg, setToastMsg] = useState("");


    const handleStack = async (e) => {
        e?.preventDefault();
        const amount = Number(tokensCount.current?.value);

        if (amount >= 50) {
            if (isDeposit === true) { // its deposit
                const res = await stackTokens({ amount });
                setToastMsg(res);

            } else if(isDeposit=== false) {  // its withdrawal
                const res = await unStackTokens({ amount });
                setToastMsg(res);
            }
        } else {
            setToastMsg("Enter amount greater than 50");
        }
        tokensCount.current.value = "0";
    }


    useEffect(()=>{
		// for automatically connecting a wallet if its not locked
		autoConnect();
	},[]);

    return (
        <section className=''>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div className=" min-w-[300px] w-8/12 md:w-6/12 lg:w-4/12 bg-black/60 rounded-lg p-6 py-16">
                    <div className="mb-2 flex justify-center">
                        <span className='w-14 md:w-20'>
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
                            <input type="radio" id='deposit' name='operation-type' onClick={()=>{setIsDeposit(true)}} />
                        </div>
                        <div className='mx-4 gap-x-2 flex'>
                            <label htmlFor="withdraw" className='text-white'>Withdraw</label>
                            <input type="radio" id='withdraw' name='operation-type' onClick={()=>{setIsDeposit(false)}} />
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
                                    disabled = {isDeposit === null ? true : false}
                                    className={`inline-flex w-full items-center justify-center ${isDeposit === null ? "bg-blue-900" : "hover:bg-blue-800"} rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white `}
                                >
                                    {isDeposit ? "Stack Tokens" : isDeposit === false ? "Unstack Tokens" : "select option"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* toast code */}
            {   

            (()=>{
                if(typeof toastMsg === "number"){
                    toast.success(`transaction successful`, {
                        position: "bottom-left",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })
                    setToastMsg("");
                }else  if(toastMsg.length){
                    toast.error(`${toastMsg}`, {
                        position: "bottom-left",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })
                    setToastMsg("");
                }
            })()
            }
        </section>
    )
}

export default Stack