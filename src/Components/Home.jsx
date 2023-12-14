import { NavLink } from 'react-router-dom'

const Home = () => {


  return (
    <div className="w-full flex justify-center">
        <div className="flex flex-col my-40 justify-center w-7/12">
          <h1 className="mt-8 font-bold text-center text-slate-300 tracking-tight text-7xl">
            We care about your future
          </h1>
          <p className="mt-8 text-lg text-slate-400 text-center p-6">
          Adding TRX tokens to the liquidity pool earns one extra token per TRX stacked, based on 5 minutes of total pooled TRX, encouraging participation and rewarding liquidity provision
          </p>
          <div className='my-6 flex justify-center'>
              <NavLink
                to={"/operations"}
                className="rounded-md bg-blue-700 px-3 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 ease-in-out duration-75" 
              >
                Stack TRX now
              </NavLink>
            </div>
        </div>
    </div>

  )
}

export default Home